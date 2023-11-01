const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan())

const http = require('http').Server(app);
const io = require('socket.io')(http)

app.use(express.static('./public'))

app.get('/', (req,res) => {
    res.sendFile('index.html', {root: __dirname})
})

http.listen(3000, () => console.log('SERVER ON'))

io.on('connection', (socket) => {
    console.log("Usuario conectado")
    socket.emit('mi mensaje','mensaje desde el servidor socket');
    socket.on("notificacion", data => {
        console.log(data);
    })
})
