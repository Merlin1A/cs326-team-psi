'use strict';
import * as http from 'http';
import * as fs from 'fs';
import express from 'express';

const JSONfile = './persistent.json';
const jsonCourses = './server/courses.json';
const PORT = process.env.PORT || 3000;
const headerText = { 'Content-Type': 'application/json;charset=utf-8' };
const app = express();
let memory = {};

// Test MongoDB
import { MongoClient } from "mongodb";
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");
    const query = { title: "Blacksmith Scene" };

    const movie = await movies.findOne(query);
    // since this method returns the matched document, not a cursor, print it directly
    console.log(movie);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
// Test MongoDB

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

app.use('/', express.static('./public/'));

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
