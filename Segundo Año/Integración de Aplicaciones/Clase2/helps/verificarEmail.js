function checkEmail(mail){
    let posicionArroba = "";
    for (let index = 0; index < mail.length; index++) {
        const element = mail[index];
        if(element == "@"){
            posicionArroba = index;
        }
    }
    if(posicionArroba == ""){
        console.log("Error: No se ingreso una direccion de email válida")
        mail = "inválido"
    }else{
        let dominio = mail.substring(posicionArroba+1,mail.length);
        if(dominio == "gmail.com" | dominio == "yahoo.com.ar" | dominio == "hotmail.com"){
            return mail;
        }else{
            mail = "inválido"
            console.log("Error: El dominio del email no es un dominio permitido (yahoo,gmail,hotmail)")
        }
    }
}
//module.exports = checkEmail;
