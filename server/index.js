const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const connectDB = require("./db");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

const corsOptions = {
  origin: [
    "https://chhavi-paliwal-invoice-generator.vercel.app/",
    "http://localhost:5173",
    "http://localhost:3000",
  ],
  method: ["GET", "POST", "PUT", "DELETE"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: "50mb" }));

app.get("/", async (req, res) => {
  res.send(await connectDB());
});

app.get("/about", (req, res) => {
  res.send("About route 🎉 ");
});

app.listen(PORT, () => console.log(`- Local:\thttp://localhost:${PORT}`));

module.exports = app;
