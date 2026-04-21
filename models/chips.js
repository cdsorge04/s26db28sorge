const mongoose = require("mongoose");
const chipsSchema = mongoose.Schema({
    chipsBrand: {
    type: String,
    required: true
  },
  chipsFlavor: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    min: 1,
    max: 100
  }
});
module.exports = mongoose.model("Chips", chipsSchema);