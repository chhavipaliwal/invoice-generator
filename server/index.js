const express = require("express");
const app = express();

const connectDB = require("./db");
const User = require("./models/User");
require("dotenv").config();

const PORT = process.env.PORT;

app.get("/", async (req, res) => {
  await connectDB();
  const users = await User.find();
  res.json(users);
});

app.get("/about", (req, res) => {
  res.send("About route 🎉 ");
});

app.listen(PORT, () => console.log(`- Local:\thttp://localhost:${PORT}`));

module.exports = app;
