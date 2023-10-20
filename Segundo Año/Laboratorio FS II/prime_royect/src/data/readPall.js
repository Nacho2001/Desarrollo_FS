const fs = require('fs');

let data = fs.readFileSync('pokeballs.json');
let dataParse = JSON.parse(data);
console.log(dataParse.pokeballs[4].nombre);
