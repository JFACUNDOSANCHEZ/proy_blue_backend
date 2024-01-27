const { sequelize, User, } = require('../../config/sequelize');
const bcrypt = require('bcrypt');



const postRegister = async (req, res) => {
    console.log(User);
    try {
        const { contraseña, correoElectronico, nivel, nombreCompleto  } = req.body;
        const level = nivel === null ? 1 : nivel
        const hashedPassword = await bcrypt.hash(contraseña, 10);
    
        if (!contraseña || !correoElectronico || !nombreCompleto ) {
            res.status(400).send('Faltan Datos')
        } else {
            const register = await User.create({
                contraseña: hashedPassword,
                correoElectronico: correoElectronico,
               
                nombreCompleto: nombreCompleto,
                nivel: level,
                activo: true
            });

            console.log(contraseña, correoElectronico, nivel, nombreCompleto );
         
            res.status(200).json({ message: 'Usuario registrado correctamente', user: register });
        }
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports = {
    postRegister
};