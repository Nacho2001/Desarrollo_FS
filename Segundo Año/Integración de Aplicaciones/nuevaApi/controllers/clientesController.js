const clientesModel = require('./../models/clientesModel')

exports.getClients = async (req,res) => {
    try{
        const clients = await clientesModel.getClients();
        res.status(200).json({
            sucess:true,
            data:clients
        })
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:"Error al obtener datos de clientes"
        })
    }
}

exports.getClientByID = async (req,res) => {
    const id = req.params.id
    try {
        const client = await clientesModel.getClientByID(id);
        if (!client[0]){
            res.status(404).json({
                sucess:false,
                message:"No se encontró el cliente solicitado"
            })
        }
        res.status(200).json({
            sucess:true,
            data:client
        })
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:"Error al obtener datos de cliente solicitado"
        })
    }
}

exports.addClient = async (req, res) => {
    const Client = req.body;
    try {
        const client = await clientesModel.addClient(Client);
        if(client<1){
            res.status(407).json({
                sucess:false,
                message:"No se logró insertar el cliente"
            })
        }else{
            res.status(200).json({
                sucess:true,
                message:"Cliente añadido exitosamente"
            })
        }

    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Error al añadir cliente"
        })        
    }
}