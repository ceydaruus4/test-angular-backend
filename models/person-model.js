const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = mongoose.Schema({
  name: String,
  age: Number,
});

module.exports = mongoose.model("Person", schema);
