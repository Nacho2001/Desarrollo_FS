const bcrypt = require("bycript");

function encriptar(value){
    const salt = bcrypt.genSyncSalt(seed_lenght=6)
    value = bcrypt.hashSync(value,salt)
    return value;
}

module.exports = {encriptar}