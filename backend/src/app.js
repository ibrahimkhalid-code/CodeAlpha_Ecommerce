const path = require("path");
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const app = express();
const orderRoutes = require("./routes/orders");
app.use(cors());
app.use(express.json());

// Serve frontend static files
app.use(express.static(path.join(__dirname, "../../frontend")));
app.use("/api/orders", orderRoutes);
// Example API route
const productRoutes = require("./routes/product.routes");
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

// Optional: Catch-all route for SPA (بدون *)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/index.html"));
});

module.exports = app;
