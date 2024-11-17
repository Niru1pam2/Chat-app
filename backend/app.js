const express = require("express");
require("dotenv").config();

//routes imports
const authRoutes = require("./routes/authRoutes");
const messageRoutes = require("./routes/messageRoutes");
const userRoutes = require("./routes/userRoutes");

const connectDB = require("./db/connect");
const PORT = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");
const { app, server } = require("./socket/socket");

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

const start = async () => {
  try {
    await connectDB();
    server.listen(PORT, () => {
      console.log(`server listening on port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
