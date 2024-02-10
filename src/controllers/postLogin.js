const { User } = require('../../config/sequelize');  // Nota los paréntesis aquí

const { JWT_SECRET } = process.env;
require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const postLogin = async (req, res) => {
  console.log('Cuerpo de la solicitud:', req.body);
  console.log("userrrr"+User);
  try {
    const { contraseña, correoElectronico } = req.body;

    if (!contraseña || !correoElectronico) {
      return res.status(400).send('Dale guachito');
    }

    console.log('Cuerpo de la solicitud:', req.body);

    const usuarioValido = await User.findOne({ where: { correoElectronico: correoElectronico } });
    console.log("ACA ESTA EL USUARIO " + usuarioValido);
console.log(usuarioValido);
    if (!usuarioValido) {
      return res.status(408).json({ mensaje: 'Credenciales inválidas' });
    }

    const contraseñaValida = await bcrypt.compare(contraseña, usuarioValido.contraseña);
    console.log("ACA ESTA LA CONTRA DE DB" + contraseñaValida);

    if (!contraseñaValida) {
      return res.status(444).json({ mensaje: 'Credenciales inválidas' });
    }

    if (!usuarioValido.activo) {
      return res.status(403).json({ mensaje: 'El usuario está inactivo. Contacta al administrador.' });
    }

    const token = jwt.sign({ usuarioId: usuarioValido.id, nivel: usuarioValido.nivel }, JWT_SECRET, { expiresIn: '1h' });
    console.log(token);

    res.status(200).json({token});
  } catch (error) {
    res.status(515).json({ message: error.message });
  }
};

module.exports = {
  postLogin
}