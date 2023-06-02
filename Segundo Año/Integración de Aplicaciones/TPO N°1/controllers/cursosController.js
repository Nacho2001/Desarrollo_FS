const cursosModels = require('../models/cursosModels.js')

exports.getCourses = async (req,res) => {
    try {
        const courses = await coursesModels.getCourses()
        res.status(200).json({
            sucess:true,
            data:clients
        })
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:"Error al obtener los cursos"
        })
    }
}