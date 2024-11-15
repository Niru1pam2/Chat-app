const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to db...");
  } catch (error) {
    console.log("Error connecting to DB", error.message);
  }
};

module.exports = connectDB;
