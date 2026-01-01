const express = require("express");
const orders = require("../data/orders");

const router = express.Router();

// إنشاء طلب جديد
router.post("/", (req, res) => {
  const { userName, cartItems, totalPrice } = req.body;

  if (!cartItems || cartItems.length === 0) {
    return res.status(400).json({ message: "Cart is empty" });
  }

  const order = {
    id: Date.now(),
    userName,
    items: cartItems,
    totalPrice,
    status: "Pending",
    createdAt: new Date(),
  };

  orders.push(order);

  res.status(201).json({
    message: "Order placed successfully",
    order,
  });
});

// جلب كل الطلبات (للدashboard)
router.get("/", (req, res) => {
  res.json(orders);
});

module.exports = router;
