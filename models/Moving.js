const mongoose = require("mongoose");

const MovingSchema = mongoose.Schema({
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
  time: {
    type: String,
    required: true
  },
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  reason: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("moving", MovingSchema);
