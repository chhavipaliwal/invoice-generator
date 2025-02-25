const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Invoice = require("./models/Invoice");
const connectDB = require("./db");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

const corsOptions = {
  origin: [
    "https://chhavi-paliwal-invoice-generator.vercel.app",
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

app.get("/api/invoices", async (req, res) => {
  await connectDB();
  const invoices = await Invoice.find();
  res.send(invoices);
});

app.post("/api/invoices", async (req, res) => {
  await connectDB();
  const invoice = await Invoice.create(req.body);
  res.send(invoice);
});

app.listen(PORT, () => console.log(`- Local:\thttp://localhost:${PORT}`));

module.exports = app;
