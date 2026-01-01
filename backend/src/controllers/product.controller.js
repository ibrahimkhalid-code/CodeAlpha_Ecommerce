const Product = require("../models/Product");

// جلب كل المنتجات
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

// إضافة منتج جديد (للتجربة أو Admin)
const addProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ error: "Invalid data" });
  }
};

module.exports = { getAllProducts, addProduct };
