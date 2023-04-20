function checkEmail(objeto){
    
}

function verificacion(mail){
    let posicionArroba = "";
    for (let index = 0; index < mail.length; index++) {
        const element = mail[index];
        if(element == "@"){
            posicionArroba = index;
        }
    }
    if(posicionArroba == ""){
        console.log("Error: No se ingreso una direccion de email válida")
    }else{
        let dominio = mail.substring(posicionArroba+1,mail.length);
        if(dominio == "gmail.com" | dominio == "yahoo.com.ar" | dominio == "hotmail.com"){
            console.log("El email ingresado ("+mail+") es válido!");
        }else{
            console.log("Error: El dominio de email ("+dominio+") no es válido");
        }
    }
}
module.exports = checkEmail;