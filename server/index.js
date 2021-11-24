'use strict';

import * as http from 'http';
import * as fs from 'fs';
import { createHash } from 'crypto';
import express from 'express';
import passport from 'passport';
import expressSession from 'express-session';
import { Strategy as LocalStrategy } from 'passport-local';
import { MongoClient } from 'mongodb';

import { authStrat, validatePassword, findUser, changePass, checkLoggedIn } from './accounts.js';
import { fetchCourses } from './courses.js';
import { fetchReviews, insertReview } from './reviews.js';


const JSONfile = './persistent.json';
const jsonCourses = './server/courses.json';
const PORT = process.env.PORT || 3000;
const headerText = { 'Content-Type': 'application/json;charset=utf-8' };
const app = express();
let memory = {};

function reload(filename) {
  if (fs.existsSync(filename)) {
    memory = JSON.parse(fs.readFileSync(JSONfile));
  }
  else {
    memory = {};
  }
}

function genHexString(len) {
  const hex = '0123456789ABCDEF';
  let output = '';
  for (let i = 0; i < len; ++i) {
    output += hex.charAt(Math.floor(Math.random() * hex.length));
  }
  return output;
}

const asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
}

reload(JSONfile);
app.use(express.json()); // lets you handle JSON input
app.use(express.urlencoded({ 'extended': true })); // allow URLencoded data

app.use('/', express.static('./public/'));

// PASSPORT CODE
// --------------------------
const session = {
  secret: process.env.SECRET || 'SECRET', // set this encryption key in Heroku config (never in GitHub)!
  resave: false,
  saveUninitialized: false
};

app.use(expressSession(session));
passport.use(authStrat);
app.use(passport.initialize());
app.use(passport.session());

// Convert user object to a unique identifier.
passport.serializeUser((user, done) => {
  done(null, user);
});

// Convert a unique identifier to a user object.
passport.deserializeUser((uid, done) => {
  done(null, uid);
});

app.route('/login')
  .post(passport.authenticate('local', {
    'successRedirect': '/',
    'failureRedirect': '/login'
  }))
  .get((req, res) => {
    res.sendFile(process.cwd() + '/public/login.html');
  });

app.route('/logout')
  .get((req, res) => {
    req.logout();
    res.redirect('/login');
  });
// -------------------------------

app.route('/account')
  .get(checkLoggedIn, (req, res) => {
    res.sendFile(process.cwd() + '/public/settings.html');
  })
  .post((req, res) => {
    res.send();
  });

app.get('/account/user', (req, res) => {
  res.send(JSON.stringify(req.user));
});

app.post('account/password', checkLoggedIn, (req, res) => {
  const newPass = req.body.password;
  const user = req.user;
  
  changePass(user, newPass);
  
  res.redirect('/account');
});

app.post('/account/update', (req, res) => {
  // TODO
  res.send();
});

app.post('/account/delete', (req, res) => {
  // TODO
  res.send();
});

app.post('/account/create', (req, res) => {
  // TODO
  res.send();
});

app.get('/courses', asyncMiddleware(async (req, res, next) => {
  /*
    if there is an error thrown in getUserFromDb, asyncMiddleware
    will pass it to next() and express will handle the error;
  */
  const courses = await fetchCourses();
  res.send(JSON.stringify(courses));
}));

app.get('/course/reviews', asyncMiddleware(async (req, res, next) => {
  /*
    if there is an error thrown in getUserFromDb, asyncMiddleware
    will pass it to next() and express will handle the error;
  */
  if (req.isAuthenticated()) {
    const reviews = await fetchReviews(req.query.coursecode);
    res.send(JSON.stringify(reviews));
  }
}));

app.post('/course/review/new', (req, res) => {
  if (req.isAuthenticated()) {
    let hash = createHash('sha256');
    const rev = {};
    hash.update(req.user);
    rev["course_code"] = req.body.coursecode;
    const user_id = hash.digest('hex');
    rev["user_id"] = user_id;
    hash = createHash('sha256');
    const random_data = genHexString(32);
    hash.update(random_data);
    rev["uid"] = hash.digest('hex');
    rev["comment"] = req.body.comment;
    rev["upvotes"] = 0;
    rev["downvotes"] = 0;
    const voted_obj = {};
    voted_obj[user_id] = null;
    rev["voted"] = voted_obj;
    insertReview(rev);
  }
});

app.post('/course/review/vote', (req, res) => {
  // TODO
  res.send()
});

app.post('/course/survey/new', (req, res) => {
  // TODO
  res.send()
});


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
