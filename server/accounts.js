import crypto from 'crypto';
import passport from 'passport';

import { MongoClient } from 'mongodb';
import { createRequire } from 'module';
import { Strategy as LocalStrategy } from 'passport-local'

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

        return done(null, username);
    });


/**
 * This function verifies that a set of credentials are valid and the associated account is verified 
 * @param {string} username 
 * @param {string} password 
 * @returns {boolean} true if the credentials are valid, false otherwise
 */
export async function validatePassword(username, password) {
    const client = new MongoClient(uri);
    let user_account = null;

    try {
        await client.connect();

        const collection = client.db("accounts").collection("info");
        const query = { "username": username };

        user_account = await collection.findOne(query);
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
 * This function attempts to find an account in the database 
 * @param {string} username 
 * @returns {boolean} true if the user exists, false otherwise
 */
export async function findAccount(username) {
    const client = new MongoClient(uri);
    let user_account = null;

    try {
        await client.connect();

        const collection = client.db("accounts").collection("info");
        const query = { "username": username };

        user_account = await collection.findOne(query);
    } finally {
        await client.close();
    }

    if (user_account === null) {
        return false;
    }
    return true;
}

/** 
 * This function attempts to create an account 
 * @param {string} username 
 * @param {string} password
 * @returns nothing
 */
export async function createAccount(username, password) {
    const client = new MongoClient(uri);
    
    try {
        await client.connect();

        const collection = client.db("accounts").collection("info");

        const isDuplicate = await findAccount(username);
        if (!isDuplicate) {
            const salt_hash = hashPass(password);
            const user = { username: username, hash: salt_hash.hash, salt: salt_hash.salt, status: "unverified" };

            await collection.insertOne(user);
        }
    } finally {
        await client.close();
    }
}

/**
 * This function attempts to change a user's password 
 * @param {string} username 
 * @param {string} newPass
 * @returns nothing
 */
export async function changePass(username, newPass) {
    const client = new MongoClient(uri);
    let user_account = null;

    try {
        await client.connect();

        const collection = client.db("accounts").collection("info");
        const query = { 'username': username };
        const hash_salt = hashPass(newPass);
        const updateArg = { $set: { 'hash': hash_salt.hash, 'salt': hash_salt.salt } };

        user_account = await collection.updateOne(query, updateArg);
    } finally {
        await client.close();
    }
}

/**
 * This function changes an account's status to verified
 * @param {string} email 
 * @returns nothing
 */
 export async function verifyAccount(email){
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const collection = client.db("accounts").collection("info");
        const query = { 'username': email };
        const updateArg = { $set: { status: "verified"} };

        await collection.updateOne(query, updateArg);
    } finally {
        await client.close();
    }
}

/**
 * This function attempts to delete a user in the database 
 * @param {string} username 
 * @returns nothing
 */
export async function deleteAccount(username) {
    const client = new MongoClient(uri);
    let user_account = null;

    try {
        await client.connect();

        const collection = client.db("accounts").collection("info");
        const query = { "username": username };

        user_account = await collection.deleteOne(query);
    } finally {
        await client.close();
    }
}

/**
 * This function attempts to add a verification code for a specified email address
 * @param {string} email 
 * @returns a unique five digit number for email verification 
 */
export async function addCode(email){
    const client = new MongoClient(uri);
    const code = Math.floor(Math.random()*90000) + 10000;
    const timestamp = Date.now();

    try {
        await client.connect();

        const collection = client.db("accounts").collection("emailCodes");
        const document = {email: email, code: code, timestamp: timestamp};

        await collection.insertOne(document);
    } finally {
        await client.close();
    }

    return code;
}

/**
 * This function attempts to find a verification code for a specified email address
 * @param {string} email 
 * @returns a unique five digit number for email verification 
 */
export async function getCode(email){
    const client = new MongoClient(uri);
    let code;

    try {
        await client.connect();

        const collection = client.db("accounts").collection("emailCodes");
        const query = { email: email };

        const document = await collection.findOne(query);

        document !== null ? code = document.code : code = null;
    } finally {
        await client.close();
    }

    return code
}

/**
 * This function removes all codes over 30 minutes old 
 * @returns nothing
 */
export async function clearCodes(){
    const client = new MongoClient(uri);
    const time = Date.now();
    const interval = time - 1800000;

    try {
        await client.connect();

        const collection = client.db("accounts").collection("emailCodes");
        const query = { timestamp: { $lt: interval } };

        await collection.deleteMany(query);
    } finally {
        await client.close();
    }
}

// Helper Functions

/**
 * Computes the hash of a string
 * @param password the plaintext password
 * @returns an object containing the hash and salt
 */
function hashPass(password){
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`);

    return {'hash': hash, 'salt': salt};
}

/**
 * Computes the hash of a given password and its salt
 * @param password the plaintext password
 * @param salt the salt to generate the hash
 * @returns the hash of the password using the salt
 */
function verifyHash(password, salt){
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`);

    return hash;
}


