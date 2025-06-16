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
  res.send("Hello world");
});

// create invoice

app.post("/api/invoices", async (req, res) => {
  try {
    await connectDB();
    const invoice = await Invoice.create(req.body);
    res.send(invoice);
  } catch (err) {
    res.status(500).send(err);
  }
});

// get all invoices

app.get("/api/invoices", async (req, res) => {
  try {
    await connectDB();
    const invoices = await Invoice.find();
    res.send(invoices);
  } catch (err) {
    res.status(500).send(err);
  }
});

// get invoice by id

app.get("/api/invoices/:id", async (req, res) => {
  try {
    await connectDB();
    const invoice = await Invoice.findById(req.params.id);
    res.send(invoice);
  } catch (err) {
    res.status(500).send(err);
  }
});

// update invoice

app.put("/api/invoices/:id", async (req, res) => {
  try {
    await connectDB();
    const invoice = await Invoice.findByIdAndUpdate(req.params.id, req.body);
    res.send(invoice);
  } catch (err) {
    res.status(500).send(err);
  }
});

// delete invoice

app.delete("/api/invoices/:id", async (req, res) => {
  try {
    await connectDB();
    const invoice = await Invoice.findByIdAndDelete(req.params.id);
    res.send(invoice);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(PORT, () => console.log(`- Local:\thttp://localhost:${PORT}`));

module.exports = app;
