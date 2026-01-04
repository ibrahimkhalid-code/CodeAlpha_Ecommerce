app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const [users] = await db.execute("SELECT * FROM users WHERE username = ?", [username]);
    if (users.length === 0) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const user = users[0];

    // التحقق من كلمة المرور
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // إنشاء JWT Token
    const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });

    res.json({ message: "Login successful", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});
