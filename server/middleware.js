import { changePass, createAccount, deleteAccount, verifyAccount, addCode, getCode } from "./accounts.js";

// Middleware functions

// Checks if an user is logged in, redirecting them to the login page if not
export function checkLoggedIn(req, res, next) {
    req.isAuthenticated() ? next() : res.redirect('/login');
}

// Checks if the email used to register is a umass email address, redirecting them to the register page if not
export function checkEmail(req, res, next) {
    req.body.email.endsWith('umass.edu') ? next() : res.redirect('/register');
}

// Sends a verification email to a the email within req 
export async function sendEmail(req, res, next) {
    const code = await addCode(req.body.email);
    verificationEmail(req.body.email, code);
    
    next();
}

// Attempts to verify an account
export async function verifyUser(req, res, next){
    const code = await getCode(req.body.email);
    code === parseInt(req.body.code) ? await verifyAccount(req.body.email) : res.redirect('/verify');

    next();
}

// Add an unverified user
export function addUser(req, res, next){
    createAccount(req.body.email, req.body.password);
    
    next();
}

// Change a user's password
export function changeUserPassword(req, res, next){
    changePass(req.user, req.body.password);
    
    next();
}

// Delete a user
export function deleteUser(req, res, next){
    deleteAccount(req.user);

    next();
}

// A wrapper for async functions
export const asyncMiddleware = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
}

// test

import nodemailer from 'nodemailer';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
let pass;
let secrets;
if (!process.env.MONGODB_URI) {
    secrets = require('./secrets.json');
    pass = secrets.support_email_pass;
}
else {
    pass = process.env.SUPPORT_EMAIL_PASS;
}

/**
 * This function sends a verification email 
 * @param {string} recipient recipient's email address
 * @param {number} code a five digit code to verify their account
 * @returns nothing
 */
function verificationEmail(recipient, code){
    const transporter = nodemailer.createTransport({
        host: 'mail.privateemail.com',
        port: 587,
        secureConnection: true,
        auth: {
            user: 'support@courseoverflow.app',
            pass: pass
        }
    });
             
    const mailOptions = { 
        from: 'support@courseoverflow.app', 
        to: recipient, 
        subject: 'Email Confirmation', 
        text: 'Hello,\n\n' 
          + 'Please enter the following code in the verification page \n\n' 
          + code
    };
    
    transporter.sendMail(mailOptions, function (err) {
        if (err) { console.log(err.message); }        
    });
}


