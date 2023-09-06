const User = require('../models/userModel.js');

exports.getAllUsers = async (req,res) => {
    try {
        const users = await User.findAll()
        res.status(200).json({
            ok:true,
            users
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error Server'
        })
    }
};

exports.createUser = async (req, res) => {
    try {
        /*const {username, password, email} = req.body; // Este metodo aplica utilizando la desestructuracion
        const nuevoUsuario={
            username,
            password,
            email
        }*/
        // NOTA IMPORTANTE: Cuando se refiere al modelo, siempre es con mayusculas, la constante esta en minusculas
        const user = await User.createUser(req.body);
        res.status(201).json({
            ok:true,
            message:`Usuario ${user} posteado exitosamente`
        })
    } catch (error) {
        console.error(500);
        res.status(500).json({
            message:'Server Error'
        })
    }
}