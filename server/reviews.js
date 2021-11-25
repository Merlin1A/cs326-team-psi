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

export async function fetchReviews(coursecode) {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const database = client.db("course");
        const reviews = database.collection("reviews");
        const ans = await reviews.find({"course_code" : coursecode}).toArray();
        return ans;
    } finally {
        await client.close();
    }
}

export async function fetchReview(uid) {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const database = client.db("course");
        const reviews = database.collection("reviews");
        const ans = await reviews.findOne({"uid" : uid});
        return ans;
    } finally {
        await client.close();
    }
}

export async function updateReview(uid, vote) {
    const client = new MongoClient(uri);
    try {
        const voteDict = {"up": "upvotes", "down": "downvotes"};
        await client.connect();
        const database = client.db("course");
        const reviews = database.collection("reviews");
        const review = await reviews.findOne({"uid" : uid});
        const votes = review[voteDict[vote]];
        console.log(votes);
        if (vote === "up") {
            await reviews.updateOne({"uid" : uid}, {$set : {"upvotes" : votes + 1}});
        }
        else {
            await reviews.updateOne({"uid" : uid}, {$set : {"downvotes" : votes + 1}});
        }
    } finally {
        await client.close();
    }
}

export async function insertReview(rev) {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const database = client.db("course");
        const reviews = database.collection("reviews");
        await reviews.insertOne(rev);
    } finally {
        await client.close();
    }
}

export async function deleteReview(uid) {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const database = client.db("course");
        const reviews = database.collection("reviews");
        await reviews.deleteOne({"uid" : uid});
    } finally {
        await client.close();
    }
}
