const {Router} = require('express');
const fs = require('fs');
const path = require('path');
const router = Router()
const pathData = path.join(__dirname, './datos/clientes.json');

router.get('/',(req,res) => {
    fs.readFile(pathData,'utf8', (req,resp) => {
        data => JSON.parse(resp);
        res.status(200).json({
            data
        })
    })
})

router.post('/adduser', (req,res) => {
    const dataUser = req.body;
    fs.readFile(pathData, 'utf8', (req, resp) => {
        data => JSON.parse(resp);
        data["articulo3"] = dataUser;
    })
    res.status(201).JSON({
        data
    })
})

