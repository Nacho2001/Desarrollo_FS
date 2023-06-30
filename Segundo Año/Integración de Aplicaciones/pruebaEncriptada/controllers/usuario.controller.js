const userModel = require("../models/usuario.model");
const bcrypt = require('bcryptjs');

exports.getUsers = async (req,res) => {
    try {
        const result = await userModel.obtenerUsers();
        res.status(200).json({
            ok:true,
            result
        })
    } catch (error) {
        res.status(500).json({
            ok:false,
            error: error.message
        })
    }
}

exports.addUser = async (req, res) => {
    let {password} = req.body;
    console.log(password);
    const salt = bcrypt.genSaltSync();
    password = bcrypt.hashSync(password, salt);
    console.log(password)
    res.status(200).json({
        ok:true,
        password
    })
}
