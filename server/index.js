const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const User = require("./models/User");

const app = express();

const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: ["http://localhost:5173", "https://divinely.dev"],
  methods: ["GET"],
};

app.use(cors(corsOptions));

app.get("/", async (req, res) => {
  await connectDB();
  const users = await User.find();
  res.json({ users: users });
});

app.post("/", (req, res) => {
  res.json({ message: "Hello POST" });
});

app.listen(PORT, () => console.log(`- Local:\thttp://localhost:${PORT}`));

module.exports = app;
