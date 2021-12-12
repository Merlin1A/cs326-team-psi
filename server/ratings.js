import { MongoClient } from 'mongodb';
import { createRequire } from 'module';
 
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

export async function postRating(newEnjoyment, newHours, newRating, newDifficulty, coursecode, uid) {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const database = client.db("course");
        const courses = database.collection("courses");
        const course = await courses.findOne({"course_code" : coursecode});
        const users = course.rated;
        users[uid] = null;
        await courses.updateOne({"course_code" : coursecode}, {$set : {"average_hours" : newHours, "enjoyed_course": newEnjoyment, "overall_rating" : newRating, "overall_difficulty" : newDifficulty, "number_ratings" : course.number_ratings + 1, "rated" : users}});
    } finally {
        await client.close();
    }
}
