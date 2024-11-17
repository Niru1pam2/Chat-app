const path = require("path");
const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");

//routes imports
const authRoutes = require("./routes/authRoutes");
const messageRoutes = require("./routes/messageRoutes");
const userRoutes = require("./routes/userRoutes");

const connectDB = require("./db/connect");
const { app, server } = require("./socket/socket");

const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join("frontend", "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join("frontend", "dist", "index.html"));
});

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
