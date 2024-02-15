const { sequelize, User, } = require('../../config/sequelize');
const nodemailer = require('nodemailer');
const { EMAIL_USER, EMAIL_PASS, JWT_SECRET } = process.env;

const putUser = async (req, res) => {
  const { id } = req.params;
  const { activo,  nombreCompleto, nivel, correoElectronico } = req.body;
console.log(id);

  try {
    const usuario = await User.findByPk(id);
console.log('¡aca esta el userrrrr'+ usuario);
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    if (activo) {
      if (activo == 'true') {
        const transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS,
          },
        });
        const mailOptions = {
          from: EMAIL_USER,
          to: usuario.correoElectronico,
          subject: 'Confirmación de correo electrónico',
          html: `
          <h2>Hola ${usuario.nombreCompleto} </h2>
          <p>Ya eres parte de la comunidad BLU</p>  
        ` };
        await transporter.sendMail(mailOptions);
  
        usuario.activo = activo
      }
        usuario.activo = activo

    }
    console.log(usuario.activo+  " aca esta el activo por config   "+activo);
    if (correoElectronico) {
      usuario.correoElectronico = correoElectronico;
    }
    if (nombreCompleto) {
      usuario.nombreCompleto = nombreCompleto;
    }
    if (nivel) {
      usuario.nivel = nivel;
     
    }
   
   
  
    await usuario.save();

    return res.status(200).json(usuario);
  } catch (error) {
    return res.status(501).json({ mensaje: 'Hubo un error al actualizar el estado del usuario' });
  }
}


module.exports = {
  putUser
}

