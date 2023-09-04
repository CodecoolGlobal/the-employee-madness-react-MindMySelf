const mongoose = require("mongoose");

const { Schema } = mongoose;

const PositionSchema = new Schema({
    name: String,
    salary: Number,
});

module.exports = mongoose.model("Position", PositionSchema);