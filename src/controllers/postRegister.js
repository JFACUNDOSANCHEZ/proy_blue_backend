const { sequelize, User, } = require('../../config/sequelize');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const { EMAIL_USER, EMAIL_PASS } = process.env;

const postRegister = async (req, res) => {
    try {
        const { contraseña, correoElectronico, nivel, nombreCompleto } = req.body;
        console.log('aca estamos en postRegister');
        const level = nivel === null ? 1 : nivel;
        const hashedPassword = await bcrypt.hash(contraseña, 10);
    
        if (!contraseña || !correoElectronico || !nombreCompleto ) {
            return res.status(400).json({ error: 'Faltan Datos' });
        }

        const register = await User.create({
            contraseña: hashedPassword,
            correoElectronico: correoElectronico,
            nombreCompleto: nombreCompleto,
            nivel: level,
            activo: "pendiente"   
        });

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASS,
            },
        });

        // Obtener correos electrónicos de los administradores
        const admins = await User.findAll();
        const adminFilter = admins.filter((a) => a.nivel === '3');
        const adminEmails = adminFilter.map(admin => admin.correoElectronico);

        const mailOptions = {
            from: `BLU <${EMAIL_USER}>`,
            to: adminEmails.join(','), 
            subject: 'Nuevo registro de usuario',
            html: `
       
                <h1>Nuevo registro de usuario en el sistema</h1>
                <p>Se ha registrado un nuevo usuario en el sistema.</p>
                <h2>Usuario: ${nombreCompleto} Mail: ${correoElectronico}  </h2>
                <p>Por favor, revisa el panel de administración para más detalles.</p>
           
            `,
        };

        if (adminEmails.length > 0) {
            // Envío de correo electrónico solo si hay administradores disponibles
            await transporter.sendMail(mailOptions);
        }
        

        res.status(200).json({ message: 'Usuario registrado correctamente', user: register });
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports = {
    postRegister
};