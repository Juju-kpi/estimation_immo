import { MongoClient } from "mongodb";

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) return { client: cachedClient, db: cachedDb };

  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db(); // db par défaut depuis URI
  cachedClient = client;
  cachedDb = db;
  return { client, db };
}

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      userId,
      eventType,
      page = "",
      duration = 0,
      metadata = null,
      timestamp = Date.now(),
      newSession = false,
    } = body;

    if (!userId || !eventType) {
      return new Response("Missing data", { status: 400 });
    }

    const { db } = await connectToDatabase();

    // 🔹 USERS
    const usersCollection = db.collection("users");
    const user = await usersCollection.findOne({ userId });

    if (!user) {
      await usersCollection.insertOne({
        userId,
        firstSeen: timestamp,
        lastSeen: timestamp,
        totalVisits: newSession ? 1 : 0,
        totalTime: eventType === "heartbeat" ? duration : 0,
      });
    } else {
      const updateFields = { lastSeen: timestamp };
      if (eventType === "heartbeat") {
        updateFields.totalTime = (user.totalTime || 0) + duration;
      }
      if (eventType === "session_start" && newSession) {
        updateFields.totalVisits = (user.totalVisits || 0) + 1;
      }

      await usersCollection.updateOne(
        { userId },
        { $set: updateFields }
      );
    }

    // 🔹 EVENTS
    const eventsCollection = db.collection("events");
    await eventsCollection.insertOne({
      userId,
      eventType,
      page,
      duration,
      metadata,
      timestamp,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Server error", { status: 500 });
  }
}
