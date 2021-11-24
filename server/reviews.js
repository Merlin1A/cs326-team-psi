import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI + 'accounts?retryWrites=true&w=majority';

export async function fetchReviews(coursecode) {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const database = client.db("course");
        const reviews = database.collection("reviews");
        const ans = await courses.find({"course_code" : coursecode}).toArray();
        return ans["reviews"];
    } finally {
        await client.close();
    }
}
