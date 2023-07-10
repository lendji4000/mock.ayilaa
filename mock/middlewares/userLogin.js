const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "users.json");

// User Login Middleware
router.post("/login", (req, res, next) => {
  const { email, password } = req.body;

  // Read users data from the JSON file
  const usersData = JSON.parse(fs.readFileSync(usersFilePath, "utf8"));

  // Find the user in the usersData array based on the email
  const user = usersData.find((user) => user.email === email);

  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  // Compare the provided password with the stored hash using bcrypt
  bcrypt.compare(password, user.password, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }

    if (result) {
      // Passwords match, user is authenticated
      // Continue to the next middleware or route handler
      next();
    } else {
      // Passwords don't match, authentication failed
      return res.status(401).json({ error: "Invalid email or password" });
    }
  });
});

module.exports = router;
