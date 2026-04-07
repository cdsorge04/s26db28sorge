const mongoose = require("mongoose");
const chipsSchema = mongoose.Schema({
    chipsBrand: String,
    chipsFlavor: String,
    cost: Number
});
module.exports = mongoose.model("Chips", chipsSchema);