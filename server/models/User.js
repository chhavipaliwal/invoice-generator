const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  status: String,
  salary: Number,
  interests: [String],
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = mongoose.model("Users", UserSchema);

module.exports = User;
