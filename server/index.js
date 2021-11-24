'use strict';

import * as http from 'http';
import * as fs from 'fs';
import express from 'express';
import passport from 'passport';
import expressSession from 'express-session';
import { Strategy as LocalStrategy } from 'passport-local';
import { MongoClient } from 'mongodb';

import { authStrat, validatePassword, findUser } from './accounts.js';


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
  .post(passport.authenticate('local', { failureRedirect: '/login' }),
    function (req, res) {
      res.redirect('/');
    }
  )
  .get((req, res) => {
    res.sendFile(process.cwd() + '/public/login.html');
  });

app.route('/logout')
  .get((req, res) => {
    req.logout();
    res.redirect('/login');
  });
// -------------------------------

app.get('/account', (req, res) => {
  // TODO
  res.send();
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

app.get('/courses', (req, res) => {
  const courses = JSON.parse(fs.readFileSync(jsonCourses));
  res.send(JSON.stringify(courses));
});

app.get('/course/reviews', (req, res) => {
  const reviews = JSON.parse(fs.readFileSync('./server/reviews/' + req.query.coursecode + '.json'));
  res.send(JSON.stringify(reviews));
});

app.post('/course/review/new', (req, res) => {
  // TODO
  res.send()
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
