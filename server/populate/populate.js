/*
Loading the .env file and creates environment variables from it
*/
require("dotenv").config();
const mongoose = require("mongoose");
const names = require("./names.json");
const levels = require("./levels.json");
const positions = require("./positions.json");
const EmployeeModel = require("../db/employee.model");
const toolnames = require("./tools.json");
const ToolModel = require("../db/tool.model");

const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1); // exit the current program
}

const pick = (from) => from[Math.floor(Math.random() * (from.length - 0))];

const makeWeigth = (max, min) => Math.floor(Math.random() * max) - min;

const populateEmployees = async () => {
  await EmployeeModel.deleteMany({});

  const employees = names.map((name) => ({
    name,
    level: pick(levels),
    position: pick(positions),
  }));

  await EmployeeModel.create(...employees);
  console.log("Employees created");
};

const makeTools = async () => {
  await ToolModel.deleteMany({});

  const tools = toolnames.map((name) => ({
    name,
    weigth: makeWeigth(5, 1)
  }));

  await ToolModel.create(...tools);
  console.log("Tools created");
}

const main = async () => {
  await mongoose.connect(mongoUrl);

  await populateEmployees();
  await makeTools();

  await mongoose.disconnect();
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
