// backend/controllers/authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../config/db');

exports.login = (req, res) => {
  const { usuario, password } = req.body;

  const User = require('../models/user');

User.findByUsername(usuario, async (err, user) => {
  if (err) return res.status(500).json({ message: 'Error en la base de datos' });
  if (!user) return res.status(401).json({ message: 'Usuario no encontrado' });
  
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(401).json({ message: 'Contraseña incorrecta' });

  const token = jwt.sign({ id: user.id, rol: user.rol }, process.env.JWT_SECRET, { expiresIn: '2h' });

  res.json({ token, rol: user.rol, usuario: user.usuario });
});

};
