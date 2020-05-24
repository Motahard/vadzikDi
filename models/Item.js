const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema({
  personName: {
    type: String,
    required: true,
  },
  itemName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true
  },
  outgo: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("items", ItemSchema);
