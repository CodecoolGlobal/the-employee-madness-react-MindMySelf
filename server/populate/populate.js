/*
Loading the .env file and creates environment variables from it
*/
require("dotenv").config();
const mongoose = require("mongoose");
const names = require("./names.json");
const levels = require("./levels.json");
const positions = require("./positions.json");
const EmployeeModel = require("../db/employee.model");
const missing = require("./missing.json");

const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1); // exit the current program
}

const pick = (from) => from[Math.floor(Math.random() * (from.length - 0))];

const populateEmployees = async () => {
  await EmployeeModel.deleteMany({});

  const employees = names.map((name) => {
    const splittedName = name.split(" ");
    return  ({
    firstName: splittedName[0],
    middleName: splittedName.length === 3 ? splittedName[1] : "",
    lastName: splittedName[splittedName.length - 1],
    level: pick(levels),
    position: pick(positions),
    present: pick(missing)
  })});

  await EmployeeModel.create(...employees);
  console.log("Employees created");
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
