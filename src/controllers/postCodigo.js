const nodemailer = require('nodemailer');
const { EMAIL_USER, EMAIL_PASS, JWT_SECRET } = process.env;

const postCodigo =(req, res)=>{

    const { code, user } = req.body;
    try {

        if (code && user) {
            const transporter = nodemailer.createTransport({
              service: 'Gmail',
              auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASS,
              },
            });
            const mailOptions = {
              from: EMAIL_USER,
              to: user,
              subject: 'Confirmación de correo electrónico',
              html: `
              <h2>Hola te enviamos un codigo para verficar tu mail </h2>
              <p>${code}</p>  
            ` };
         transporter.sendMail(mailOptions);
      
         res.status(200).json({ code });
          }
    } catch (error) {
        res.status(515).json({ message: error.message });
    }

}

module.exports = {
    postCodigo
  }