import { changePass, createAccount, deleteAccount, verifyAccount, addCode, getCode } from "./accounts.js";
import { verificationEmail } from "./email.js";

// Middleware functions

// Checks if an user is logged in, redirecting them to the failure page if not
export function checkLoggedIn(req, res, next) {
    req.isAuthenticated() ? next() : res.redirect('/nan');
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
    code === parseInt(req.body.code) ? await verifyAccount(req.body.email) : res.redirect('/failedverify');

    next();
}

// Add an unverified user
export async function addUser(req, res, next){
    createAccount(req.body.email, req.body.password);
    
    next();
}

// Change a user's password
export async function changeUserPassword(req, res, next){
    changePass(req.user, req.body.password);
    
    next();
}

// Delete a user
export async function deleteUser(req, res, next){
    await deleteAccount(req.user);

    next();
}

// A wrapper for async functions
export const asyncMiddleware = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
}


