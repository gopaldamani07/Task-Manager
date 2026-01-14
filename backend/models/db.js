const mongoose = require("mongoose");
require("dotenv").config("/../.env");
const DB_URL = process.env.DB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log(" MongoDB is connected..");
  } catch (error) {
    console.error(" MongoDB connection error:", error);
    process.exit(1); // stop the server if db fails
  }
};

module.exports = connectDB;
