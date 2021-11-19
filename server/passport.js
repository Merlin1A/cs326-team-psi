import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local'
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;


// Passport configuration
export const authStrat = new LocalStrategy(
    async (username, password, done) => {
        if (!findUser(username)) {
            return done(null, false, { 'message': 'Wrong username' });
        }
        if (!validatePassword(username, password)) {
            await new Promise((r) => setTimeout(r, 2000)); // two second delay
            return done(null, false, { 'message': 'Wrong password' });
        }
        // success!
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
        const query = { "username": username, "password": password };

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
export async function addUser(name, password) {
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db("accounts");
        const users = database.collection("info");

        const user = { username: name, password: password };
        await users.insertOne(user);
    } finally {
        await client.close();
    }
}



