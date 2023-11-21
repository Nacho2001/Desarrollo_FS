// cargar dependencias

const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');


const app = express();

//Primero se muestra un mensaje de bienvenida
// A esta ruta se puede acceder sin token

app.get('/', (req,res) => {
    res.send('Welcome to th jungle!!!');
})

/* 
    Registra la ruta para obtener un nuevo token\
    Es similar a las credenciales del usuario
    El token sera de 2 minutos
*/

app.get('/login', (req,res) => {
    var token = jwt.sign({username:'leomessi'}, 'clavesecreta', {expiresIn:120})
    res.status(200).json({
        token    
    })
})

api.get('/api', (req,res) =>{
    const token = req.query.token;
    jwt.verify(token,'clavesecreta', (err,decod) = {
        if (!err){
            var secrets = {'clave bncaria':'987654', 'pin':'1234'};
            res.json(secrets);        
        } else {
            res.send(err);        
        }
    })
})

//Inicia el servidor


