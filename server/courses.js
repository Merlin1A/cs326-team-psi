import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI + 'accounts?retryWrites=true&w=majority';

export async function fetchCourses() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const database = client.db("course");
        const courses = database.collection("courses");
        const ans = await courses.find({}).toArray();
        return ans;
    } finally {
        await client.close();
    }
}
