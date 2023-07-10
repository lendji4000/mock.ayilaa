const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "users.json");

// User Registration Middleware
router.post("/register", (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phone1,
    phone2,
    gender,
    dateOfBirth,
    addressId,
    role,
    password,
    currentGpsLocation,
  } = req.body;

  // Read users data from the JSON file
  const usersData = JSON.parse(fs.readFileSync(usersFilePath, "utf8"));
  console.log(usersData);

  // Check if email is already registered
  const existingUser = usersData.find((user) => user.email === email);

  if (existingUser) {
    return res.status(400).json({ error: "Email already registered" });
  }

  // Generate password hash using bcrypt
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }

    // Create a new user object
    const newUser = {
      id: usersData.length + 1, // Assign a unique ID to the user
      firstName,
      lastName,
      email,
      phone1,
      phone2,
      gender,
      dateOfBirth,
      addressId,
      role,
      password: hash,
      currentGpsLocation,
    };

    // Add the new user to the usersData array
    usersData.push(newUser);

    // Write updated users data back to the JSON file
    fs.writeFileSync(usersFilePath, JSON.stringify(usersData, null, 2));

    // Continue to the next middleware or route handler
    next();
  });
});

module.exports = router;
