const productosModel = require('./../models/productosModel');

exports.getProducts = async (req,res) => {
    try {
        const productos = await productosModel.getProducts();
        res.status(200).json({
            success:true,
            data:productos
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            data:productos
        })
    }
}

exports.getProductByID = async (req,res) => {
    const id = req.params.id
    try {
        const product = productosModel.getProductByID(id);
        if (!product[0]){
            res.status(404).json({
                success:false,
                message:"No se pudo encontrar el producto solicitado"
            })
        }
        res.status(200).json({
            success:true,
            data:product
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Error al obtener los datos del producto solicitado"
        })        
    }
}

exports.addProduct = async (req,res) => {
    const Product = req.body
    try {
        const product = productosModel.addProduct(Product);
        if(product.lenght<1){
            res.status(407).json({
                success:false,
                message:"No se pudo ingresar el producto con éxito"
            })
        } else {
            res.status(200).json({
                success:true,
                data:product
            })
        }
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Error al ingresar el nuevo producto"
        })
    }
}