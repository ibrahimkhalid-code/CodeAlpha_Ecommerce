const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2/promise');

const app = express();
app.use(bodyParser.json());

const SECRET_KEY = "mysecretkey";

// إنشاء اتصال بقاعدة البيانات
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '', // ضع كلمة مرور MySQL هنا
  database: 'myapp'
};

let db;
(async function initDB() {
  db = await mysql.createConnection(dbConfig);
  console.log("Connected to MySQL database");
})();
