import mongoose from "mongoose";

const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/setup_db";

mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected (setup)"))
  .catch((err) => console.error("MongoDB connection error:", err));
