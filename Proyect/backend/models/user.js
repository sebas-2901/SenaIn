// backend/models/User.js
const db = require('../config/db');

const findByUsername = (usuario, callback) => {
  db.query('SELECT * FROM usuarios WHERE usuario = ?', [usuario], (err, results) => {
    if (err) return callback(err, null);
    if (results.length === 0) return callback(null, null);
    return callback(null, results[0]);
  });
};

module.exports = { findByUsername };
