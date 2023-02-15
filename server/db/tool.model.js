const mongoose = require("mongoose");

const {Schema} = mongoose;

const ToolSchema = new Schema({
    name: String,
    weight: Number
});

module.exports = mongoose.model("Tool", ToolSchema);