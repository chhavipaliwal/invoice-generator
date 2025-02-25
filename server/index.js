const express = require("express");
const app = express();

const connectDB = require("./db");
require("dotenv").config();

const PORT = process.env.PORT;

connectDB();

app.get("/", async (req, res) => {
  res.send("Hello World 🌍");
});

app.get("/about", (req, res) => {
  res.send("About route 🎉 ");
});

app.listen(PORT, () => console.log(`- Local:\thttp://localhost:${PORT}`));

module.exports = app;
