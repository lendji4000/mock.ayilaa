const express = require("express");
const app = express();
const userRegistrationMiddleware = require("./middlewares/userRegistration");
const userLoginMiddleware = require("./middlewares/userLogin");
const employeeRegistrationMiddleware = require("./middlewares/employeeRegistration");
const employeeLoginMiddleware = require("./middlewares/employeeLogin");
const bodyParser = require("body-parser");
const path = require("path");

// Parse incoming request bodies
app.use(bodyParser.json());

// Use the user registration middleware
app.use(userRegistrationMiddleware);

// Use the user login middleware
app.use(userLoginMiddleware);
app.use(employeeRegistrationMiddleware);
app.use(employeeLoginMiddleware);

// Handle the user registration route
app.post("/register", (req, res) => {
  // Handle user registration logic
  res.status(200).json({ message: "User registered successfully" });
});
app.post("/register", (req, res) => {
  // Handle user registration logic
  res.status(200).json({ message: "User registered successfully" });
});

// Handle the user login route
app.post("/registerEmployee", (req, res) => {
  // Handle user login logic
  res.status(200).json({ message: "Employee registration successful" });
});
app.post("/loginEmployee", (req, res) => {
  // Handle user login logic
  res.status(200).json({ message: "Employee login successful" });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
