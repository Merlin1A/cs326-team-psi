'use strict';
import * as http from 'http';
import * as fs from 'fs';
import express from 'express';

const JSONfile = './persistent.json';
const PORT = process.env.PORT || 80;
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

app.use('/', express.static('../public/'));

app.get('/account', (req, res) => {
  // TODO
  res.send()
});

app.get('/account/login', (req, res) => {
  // TODO
  res.send()
});

app.post('/account/update', (req, res) => {
  // TODO
  res.send()
});

app.post('/account/delete', (req, res) => {
  // TODO
  res.send()
});

app.post('/account/create', (req, res) => {
  // TODO
  res.send()
});

app.get('/courses', (req, res) => {
  // TODO
  res.send()
});

app.get('/course/reviews', (req, res) => {
  // TODO
  res.send()
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


// app.get('*', (req, res) => {
//   res.send('NO FOOL');
// });

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
