let cadenas = ["striing", "32", "no borrar", "109", "final"+4,"objeto"];
let cadenas2 = []

for (let i = 0; i < cadenas.length; i++) {
    let cadena = cadenas[i];
    let valido = Boolean;
    if(cadena.length >= 4){
        for (let i2 = 0; i2 < cadena.length; i2++) {
            let caracter = cadena[i2];
            let esLetra = Boolean;
            checkLetra(caracter, esLetra);
            if(esLetra == false){
                valido = false;
                break;
            }else{
                valido = true;
            }
        }
        if(valido == true){
            cadenas2.push(cadena);
        }
    }

}

function checkLetra(caracter,esLetra){
    if(caracter == "a" | caracter == "b" | caracter == "c" | caracter == "d" | caracter == "e" | caracter == "f" |
    caracter == "g" | caracter == "h" | caracter == "i" | caracter == "j" | caracter == "k" | caracter == "l" |
    caracter == "m" | caracter == "n" | caracter == "ñ" | caracter == "o" | caracter == "p" | caracter == "q" |
    caracter == "r" | caracter == "s" | caracter == "t" | caracter == "u" | caracter == "v" | caracter == "w" |
    caracter == "x" | caracter == "y" | caracter == "z"){
        esLetra = true;
    }else{
        esLetra = false;
    }
    return esLetra;
}
console.log(cadenas2)