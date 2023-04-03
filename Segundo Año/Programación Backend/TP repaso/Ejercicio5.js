let cadenas = ["string", "32", "no borrar", "109", "final"+4,"objeto"];

cadenas.forEach(cadena => {
    if(cadena.length >= 4){
        console.log("'"+cadena+"' tiene más de 5 caracteres")
        /*for (i = 0; i < cadena.length; i++) {
            let caracter = cadena[i];
            let esLetra = Boolean;
            if(caracter == "a" | caracter == "b" | caracter == "c" | caracter == "d" | caracter == "e" | caracter == "f" | caracter == "g" | caracter == "h" |  caracter == "i" | 
            caracter == "j" | caracter == "k" | caracter == "l" | caracter == "m" | caracter == "n" | caracter == "o" | caracter == "p" | caracter == "q" | caracter == "r" | 
            caracter == "s" | caracter == "t" | caracter == "u" | caracter == "v" | caracter == "w" | caracter == "x" | 
            caracter == "y" | caracter == "z"){
                esLetra = true
            }else{
                esLetra = false
            }
            if(esLetra == false){
                console.log("El string '"+cadena+"' posee un elemento no válido");
                cadenas.shift(cadenas.indexOf(cadena));
                break;
            }
        }*/
    }else{
        console.log("'"+cadena+"' no tiene más de 5 caracteres, por lo tanto no es aceptado")
        cadenas.shift(cadenas.indexOf(cadena+1));
    }
});
console.log(cadenas);