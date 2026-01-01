const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  addProduct,
} = require("../controllers/product.controller");

// GET: جلب كل المنتجات
router.get("/", getAllProducts);

// POST: إضافة منتج جديد (اختياري للتجربة)
router.post("/", addProduct);

module.exports = router;
