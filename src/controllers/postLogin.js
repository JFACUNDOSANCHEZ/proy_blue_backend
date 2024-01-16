import User from '../models/user'


const getUserId = async (req, res) => {
   try{

    console.log(User);
      const {id} =  req.params;

      const usuario = await User.findByPk(id);
  
         
          res.status(200).json(usuario)
      
  
      }catch (error) {
   res.status(503).send(error.message);
   console.log(error.message);
   }
}

export default getUserId