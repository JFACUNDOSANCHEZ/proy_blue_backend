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
    from: `BLU <${EMAIL_USER}>`,
    to: user,
    subject: 'Confirmación de correo electrónico',
    html: `
    <html>
    <head>
        <title>Confirmación de correo electrónico</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                color: #333;
                background-color: #f9f9f9;
                margin: 0;
                padding: 0;
            }

            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #fff;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }

            h2 {
                color:  #14553bec;
            }

            p {
                margin-bottom: 20px;
            }

            .button {
                display: inline-block;
                padding: 10px 20px;
                background-color:  #14553bec;
                color: #fff;
                text-decoration: none;
                border-radius: 5px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h2>Hola,</h2>
            <p>Desde BLU te enviamos un código para verificar tu correo electrónico:</p>
            <p>El código de verificación es: <strong>123456</strong></p>
        
        </div>
    </body>
    </html>
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