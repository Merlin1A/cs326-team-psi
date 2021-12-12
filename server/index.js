'use strict';

import * as http from 'http';
import * as fs from 'fs';
import { createHash } from 'crypto';
import express from 'express';
import passport from 'passport';
import expressSession from 'express-session';
import { Strategy as LocalStrategy } from 'passport-local';
import { MongoClient } from 'mongodb';

import { authStrat, clearCodes } from './accounts.js';
import { fetchCourses, fetchCourse } from './courses.js';
import { fetchReviews, fetchReview, insertReview, updateReview, deleteReview } from './reviews.js';
import { postRating } from './ratings.js';
import { checkLoggedIn, checkEmail, sendEmail, verifyUser, addUser, changeUserPassword, asyncMiddleware, deleteUser } from './middleware.js';


const app = express();
const PORT = process.env.PORT || 3000;
const headerText = { 'Content-Type': 'application/json;charset=utf-8' };
const session = {
  secret: process.env.SECRET || 'SECRET', 
  resave: false,
  saveUninitialized: false
};

app.use(express.json()); 
app.use(express.urlencoded({ 'extended': true })); 
app.use(expressSession(session));
passport.use(authStrat);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((uid, done) => {
  done(null, uid);
});

setTimeout(clearCodes, 1800000);

app.route('/')
  .get((req, res) => {
    res.sendFile(process.cwd() + '/public/landing.html');
  });

app.route('/main')
  .get(checkLoggedIn, (req, res) => {
    res.sendFile(process.cwd() + '/public/index.html');
  })
  .post((req, res) => {
    res.send();
  });

app.route('/landing')
  .get((req, res) => {
    res.sendFile(process.cwd() + '/public/landing.html');
  });

app.route('/logoutmsg')
  .get((req, res) => {
    res.sendFile(process.cwd() + '/public/logout.html');
  });

app.route('/nan')
  .get((req, res) => {
    res.sendFile(process.cwd() + '/public/cannotaccess.html');
  });

app.route('/login')
  .post(passport.authenticate('local', {
    'successRedirect': '/main',
    'failureRedirect': '/failedlogin'
  }))
  .get((req, res) => {
    res.sendFile(process.cwd() + '/public/login.html');
  });

app.route('/failedlogin')
  .get((req, res) => {
    res.sendFile(process.cwd() + '/public/failedlogin.html');
  });

app.route('/logout')
  .get((req, res) => {
    req.logout();
    res.redirect('/logoutmsg');
  })
  .post((req, res) => {
    res.send();
  });

app.route('/account')
  .get(checkLoggedIn, (req, res) => {
    res.sendFile(process.cwd() + '/public/account.html');
  })
  .post((req, res) => {
    res.send();
  });

app.route('/register')
  .get((req, res) => {
    res.sendFile(process.cwd() + '/public/createacc.html');
  })
  .post(checkEmail, asyncMiddleware(sendEmail), asyncMiddleware(addUser), (req, res) => {
    res.redirect('/verify');
  });

app.route('/verify')
  .get((req, res) => {
    res.sendFile(process.cwd() + '/public/verify.html');
  })
  .post(asyncMiddleware(verifyUser), (req, res) => {
    res.redirect('/login');
  });

app.route('/ratings')
  .get(checkLoggedIn, (req, res) => {
    res.sendFile(process.cwd() + '/public/ratings.html');
  })
  .post((req, res) => {
    res.send();
  });

app.get('/account/user', (req, res) => {
  res.send(JSON.stringify(req.user));
});

app.post('/account/password', checkLoggedIn, asyncMiddleware(changeUserPassword), (req, res) => {
  res.redirect('/account');
});

app.post('/account/delete', checkLoggedIn, asyncMiddleware(deleteUser), (req, res) => {
  req.logout();
  res.redirect('/login');
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
    rev["course_code"] = req.query.coursecode;
    const user_id = hash.digest('hex');
    rev["user_id"] = user_id;
    hash = createHash('sha256');
    const random_data = genHexString(32);
    hash.update(random_data);
    rev["uid"] = hash.digest('hex');
    rev["comment"] = req.query.comment;
    rev["upvotes"] = 0;
    rev["downvotes"] = 0;
    const voted_obj = {};
    voted_obj[user_id] = null;
    rev["voted"] = voted_obj;
    insertReview(rev);
    res.send("posted review")
  }
});

app.post('/course/review/vote', asyncMiddleware(async (req, res, next) => {
  /*
    if there is an error thrown in getUserFromDb, asyncMiddleware
    will pass it to next() and express will handle the error;
  */
  if (req.isAuthenticated()) {
    const review = await fetchReview(req.query.rid);
    if (review.downvotes > 10) {
      deleteReview(req.query.rid);
    }
    else {
      updateReview(req.query.rid, req.query.vote);
    }
    res.send("voted");
  }
}));

app.post('/course/survey/new', asyncMiddleware(async (req, res, next) => {
  /*
    if there is an error thrown in getUserFromDb, asyncMiddleware
    will pass it to next() and express will handle the error;
  */
  if (req.isAuthenticated()) {
    let hash = createHash('sha256');
    hash.update(req.user);
    const uid = hash.digest('hex');
    const coursecode = req.query.coursecode.substring(1, req.query.coursecode.length-1)
    const course = await fetchCourse(coursecode);
    if (!course.rated.hasOwnProperty(uid)) {
        const newHours = ((course.number_ratings * course.average_hours) + req.query.weeklyhours) / (course.number_ratings + 1)
        const newRating = ((course.number_ratings * course.overall_rating) + req.query.rating * 10) / (course.number_ratings + 1)
        const newDifficulty = ((course.number_ratings * course.overall_difficulty) + req.query.difficulty * 10) / (course.number_ratings + 1)
        const newEnjoyment = ((course.number_ratings * course.enjoyed_course) + req.query.enjoyment * 10) / (course.number_ratings + 1)
        postRating(newEnjoyment, newHours, newRating, newDifficulty, coursecode, uid);
    }
    res.send("rated");
  }
}));

app.use('/', express.static('./public/'));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});


// Helper functions

/**
 * Generates a hexadecimal string
 * @param {number} len length of hexadecimal string to generate
 * @returns {string} random hexadecimal string of length len
 */
 function genHexString(len) {
  const hex = '0123456789ABCDEF';
  let output = '';

  for (let i = 0; i < len; ++i) {
    output += hex.charAt(Math.floor(Math.random() * hex.length));
  }
  return output;
}

