const mongoose = require("mongoose");

const {Schema} = mongoose;

const ToolSchema = new Schema({
    name: String,
    weigth: Number
});

module.exports = mongoose.model("Tool", ToolSchema);