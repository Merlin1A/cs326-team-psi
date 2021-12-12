import passport from 'passport';
import crypto from 'crypto';
import { Strategy as LocalStrategy } from 'passport-local'
import { MongoClient } from 'mongodb';
import { createRequire } from 'module';
 
const require = createRequire(import.meta.url);
let uri;
let secrets;
if (!process.env.MONGODB_URI) {
    secrets = require('./secrets.json');
    uri = secrets.uri + 'accounts?retryWrites=true&w=majority';
}
else {
    uri = process.env.MONGODB_URI + 'accounts?retryWrites=true&w=majority';
}

// Passport configuration
export const authStrat = new LocalStrategy(
    async (username, password, done) => {
        const validation = await validatePassword(username, password);

        if (!validation) {
            await new Promise((r) => setTimeout(r, 2000)); // two second delay
            return done(null, false, { 'message': 'Wrong password or Username' });
        }

        // should create a user object here, associated with a unique identifier
        return done(null, username);
    });


/**
 * This function verifies that a set of credentials are valid 
 * @param {string} username 
 * @param {string} password 
 * @returns {boolean} true if the credentials are valid, false otherwise
 */
export async function validatePassword(username, password) {
    const client = new MongoClient(uri);
    let user_account = null;

    try {
        await client.connect();

        const database = client.db("accounts");
        const users = database.collection("info");
        const query = { "username": username };

        user_account = await users.findOne(query);
    } finally {
        await client.close();
    }

    const hash = user_account.hash;
    const salt = user_account.salt;


    if (verifyHash(password, salt) !== hash) {
        return false;
    }
    return true;
}


/**
 * This function attempts to find a user in the database 
 * @param {string} username 
 * @returns true if the user exists, false otherwise
 */
export async function findUser(username) {
    const client = new MongoClient(uri);
    let user_account = null;

    try {
        await client.connect();

        const database = client.db("accounts");
        const users = database.collection("info");
        const query = { "username": username };

        user_account = await users.findOne(query);
    } finally {
        await client.close();
    }

    if (user_account === null) {
        return false;
    }
    return true;
}


/** 
 * This function attempts to create a user 
 * @param {string} username 
 * @param {string} password
 * @returns Nothing currently
 */
export async function addUser(username, password) {
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db("accounts");
        const users = database.collection("info");

        const isDuplicate = await findUser(username);
        if (isDuplicate) {
            return;
            // IMPLEMENT ^
        }

        const salt_hash = hashPass(password);

        const user = { username: username, hash: salt_hash.hash, salt: salt_hash.salt };
        await users.insertOne(user);
    } finally {
        await client.close();
    }
}


/**
 * This function attempts to change a user's password 
 * @param {string} username 
 * @param {string} newPass
 * @returns Nothing currently
 */
export async function changePass(username, newPass) {
    const client = new MongoClient(uri);
    let user_account = null;

    try {
        await client.connect();

        const database = client.db("accounts");
        const users = database.collection("info");
        const query = { 'username': username };
        const hash_salt = hashPass(newPass);
        const updateArg = { $set: { 'hash': hash_salt.hash, 'salt': hash_salt.salt } };

        user_account = await users.updateOne(query, updateArg);
    } finally {
        await client.close();
    }
}


/**
 * This function attempts to delete a user in the database 
 * @param {string} username 
 * @returns 
 */
export async function deleteAccount(username) {
    const client = new MongoClient(uri);
    let user_account = null;

    try {
        await client.connect();

        const database = client.db("accounts");
        const users = database.collection("info");
        const query = { "username": username };

        user_account = await users.deleteOne(query);
    } finally {
        await client.close();
    }
}


// Middleware functions

// Checks if an user is logged in, redirecting them to the login page if not
export function checkLoggedIn(req, res, next) {
    req.isAuthenticated() ? next() : res.redirect('/nan');
}

// Checks if the email used to register is a umass email address, redirecting them to the register page if not
export function checkEmail(req, res, next) {
    req.body.username.endsWith('umass.edu') ? next() : res.redirect('/register');
}


// Utility Functions

function hashPass(password){
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`);

    return {'hash': hash, 'salt': salt};
}

function verifyHash(password, salt){
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`);

    return hash;
}


