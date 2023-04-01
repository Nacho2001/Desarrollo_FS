let email = "nm@yahoo.com.ar";

let validar = (mail) => { // Funcion para validar email
    let posicionArroba = "";
    //Primero recorre el string para indentificar si tiene un arroba, es decir, si posee un dominio
    for (let index = 0; index < mail.length; index++) {
        const element = mail[index];
        // Si encuentra el caracter que corresponde a un arroba, toma la posicion del mismo (el valor de index)
        if(element == "@"){
            posicionArroba = index;
        }
    }
    // Finalizado el bucle, revisa si posicionArroba esta vacia, si es así, entonces el mail no tiene dominio y no es válido
    if(posicionArroba == ""){
        console.log("Error: No se ingreso una direccion de email válida")
    }else{
        /* Si tiene arroba, utiliza la posición que tiene en el string para identificar el dominio.
            Para eso, usa substring para generar una segunda cadena de caracteres con el dominio */
        let dominio = mail.substring(posicionArroba+1,mail.length);
        // Este algoritmo solamente tomará por válidos los emails que sean de gmail, yahoo o hotmail
        if(dominio == "gmail.com" | dominio == "yahoo.com.ar" | dominio == "hotmail.com"){
            // Si el email corresponde a uno de los dominios reconocidos, entonces será válido y mostrará mensaje en consola
            console.log("El email ingresado ("+mail+") es válido!");
        }else{
            // Si no devolverá un error.
            console.log("Error: El dominio de email ("+dominio+") no es válido");
        }
    }
}

validar(email);
