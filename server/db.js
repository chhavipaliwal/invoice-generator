const mongoose = require("mongoose");
require("dotenv").config();

const DBURL = process.env.MONGO_URI;

const connectDB = async () => {
  await mongoose
    .connect(DBURL)
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.error("Connection to database failed", err);
    });
};

module.exports = connectDB;
