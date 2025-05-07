// backend/config/db.js
const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la BD:', err);
    return;
  }
  console.log('Conexión a la BD MySQL establecida');
});

module.exports = connection;