import { Db, MongoClient } from 'mongodb';


if (typeof process.env.MONGODB_URI === "undefined") {
    throw new Error('Define the MONGODB_URI environmental variable');
}

if (typeof process.env.MONGODB_DB === "undefined") {
    throw new Error('Define the MONGODB_DB environmental variable');
}

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.DB_NAME;

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase() {
    // check the cached.
    if (cachedClient && cachedDb) {
        // load from cache
        return {
            client: cachedClient,
            db: cachedDb,
        };
    }

    // Connect to cluster
    let client = new MongoClient(MONGODB_URI);
    await client.connect();
    let db = client.db(MONGODB_DB);

    // set cache
    cachedClient = client;
    cachedDb = db;

    return {
        client: cachedClient,
        db: cachedDb,
    };
}

export const db = connectToDatabase();