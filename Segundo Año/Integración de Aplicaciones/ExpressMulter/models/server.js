const express = require("express")
const multer = require("multer")
const app = express();

app.use(express.urlencoded({encoded: true}))

app.get('/', function(req,res) {
    res.sendFile(__dirname+ "/index.html");
})

app.listen(3000, () => console.log("Server started on port 3000"))

var storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null,"uploads")
    },
    filename: function (res, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

var upload = multer({ storage: storage })

app.post('/upload', upload.single('myFile'), (req, res, next) => {
    const file = req.file
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(file)
})