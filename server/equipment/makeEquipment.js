/*
Loading the .env file and creates environment variables from it
*/
require("dotenv").config();
const mongoose = require("mongoose");
const names = require("./equipmentname.json");
const types = require("./equipmenttypes.json");
const amounts = require("./equipmentamount.json");
const EquipmentModel = require("../db/equipment.model");

const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1); // exit the current program
}

const pick = (from) => from[Math.floor(Math.random() * (from.length - 0))];

const populateEmployees = async () => {
  await EquipmentModel.deleteMany({});

  const epuipments = names.map((name) => {
    return  ({
    name: name,
    type: pick(types),
    amount: pick(amounts),
  })});

  await EquipmentModel.create(...epuipments);
  console.log("Emquipments created");
};

const main = async () => {
  await mongoose.connect(mongoUrl);

  await populateEmployees();

  await mongoose.disconnect();
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
