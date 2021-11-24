import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI + 'accounts?retryWrites=true&w=majority';

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
