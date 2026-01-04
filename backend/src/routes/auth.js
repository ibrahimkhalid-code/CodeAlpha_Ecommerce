const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const users = [];

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  const userExists = users.find((u) => u.email === email);
  if (userExists) {
    return res.status(400).json({ message: "Email already exists" });
  }

  const user = { id: Date.now(), name, email, password };
  users.push(user);

  const token = jwt.sign({ id: user.id, name: user.name }, "secret_key", {
    expiresIn: "1h",
  });

  res.json({ token, user: { name: user.name } });
});

// ✅ LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Email or password incorrect" });
  }

  const token = jwt.sign({ id: user.id, name: user.name }, "secret_key", {
    expiresIn: "1h",
  });

  res.json({ token, user: { name: user.name } });
});

module.exports = router;
