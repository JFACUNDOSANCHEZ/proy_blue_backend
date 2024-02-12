const nodemailer = require('nodemailer');
const { EMAIL_USER, EMAIL_PASS } = process.env;

const postCodigo = async (req, res) => {
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
console.log('aca esta el email user del .env'+EMAIL_USER);
console.log('aca esta el email user del .env'+EMAIL_PASS);
            const mailOptions = {
                from: EMAIL_USER,
                to: user,
                subject: 'Confirmación de correo electrónico',
                html: `
                    <h2>Hola, desde blu te enviamos un código para verificar tu correo electrónico</h2>
                    <p>El código de verificación es: <strong>${code}</strong></p>
                `,
            };

            await transporter.sendMail(mailOptions);
            res.status(200).json({ code });
        } else {
            res.status(400).json({ error: 'Falta el código o el usuario' });
        }
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
        res.status(500).json({ error: 'Error interno del servidor al enviar el correo electrónico' });
    }
};

module.exports = {
    postCodigo
};