const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const fs = require("fs");
const saltRounds = 10;
const path = require("path");

const employeesFilePath = path.join(__dirname, "employees.json");

// Employee Registration Middleware
router.post("/registerEmployee", (req, res, next) => {
  const {
    first_name,
    last_name,
    email,
    phone1,
    phone2,
    gender,
    date_of_birth,
    adresseId,
    role,
    password,
    current_gps_location,
  } = req.body;

  // Read employees data from the JSON file
  const employeesData = JSON.parse(fs.readFileSync(employeesFilePath, "utf8"));

  // Check if email is already registered
  const existingEmployee = employeesData.find(
    (employee) => employee.email === email
  );

  if (existingEmployee) {
    return res.status(400).json({ error: "Email already registered" });
  }

  // Generate password hash using bcrypt
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }

    // Create a new employee object
    const newEmployee = {
      id: employeesData.length + 1,
      first_name,
      last_name,
      email,
      phone1,
      phone2,
      gender,
      date_of_birth,
      adresseId,
      role,
      verified: false,
      verified_at: "",
      active: false,
      activated_at: "",
      password: hash,
      current_gps_location,
    };

    // Add the new employee to the employeesData array
    employeesData.push(newEmployee);

    // Write updated employees data back to the JSON file
    fs.writeFileSync(employeesFilePath, JSON.stringify(employeesData, null, 2));

    // Continue to the next middleware or route handler
    next();
  });
});

module.exports = router;
