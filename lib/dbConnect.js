import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://raju:raju@cluster0.tc0kuqt.mongodb.net/EduWeb?retryWrites=true&w=majority";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}


let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    console.log("data hare")
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      // bufferCommands: false,
     useNewUrlParser: true
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;

      console.log("db connected")

    });
  }
  cached.conn = await cached.promise;

  return cached.conn;
}

export default dbConnect;
