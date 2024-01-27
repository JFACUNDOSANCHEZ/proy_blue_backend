const { sequelize, User, Passeger } = require('../../config/sequelize');
const postPasseger = async (req, res) => {
    try {
        const { name, dni, motivo, uId, img } = req.body
        if (!name || !dni || !motivo) {
            res.status(400).send('Faltan Datos')
        } else {
            const passegerCrated = await Passeger.create({ name, dni, motivo,  userId: uId,img  });
          

          
         

            res.status(201).json(passegerCrated);
        }

    } catch (error) {
        res.status(404).json({ message: error.message })

    }


}
module.exports = {
    postPasseger
}