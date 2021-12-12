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
export function verificationEmail(recipient, code){
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
