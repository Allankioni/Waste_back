const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const connection = require("../utils/mongodbConnections");

const wasteSchema = new Schema({
  type: String,
  reusability: Number,
  refabishability: Number,
  location: String,
  image: String,
});
module.exports = connection.model("waste", wasteSchema);
