const express = require("express");
const app = express();

const connectDB = require("./db");
require("dotenv").config();

const PORT = process.env.PORT;

app.get("/", async (req, res) => {
  res.send(await connectDB());
});

app.get("/about", (req, res) => {
  res.send("About route 🎉 ");
});

app.listen(PORT, () => console.log(`- Local:\thttp://localhost:${PORT}`));

module.exports = app;
