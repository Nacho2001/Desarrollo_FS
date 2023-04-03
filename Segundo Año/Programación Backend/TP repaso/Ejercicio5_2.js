let cadenas = ["striing", "32", "no borrar", "109", "final"+4,"objeto"];
let cadenas2 = []

for (let i = 0; i < cadenas.length; i++) {
    let cadena = cadenas[i];
    if(cadena.length >= 4){
        for (let i2 = 0; i2 < cadena.length; i2++) {
            let caracter = cadena[i2];
            let esLetra = Boolean;
            checkLetra(caracter, esLetra);
            if(esLetra == true){
                
            }else
        }
    }

}

function checkLetra(caracter,esLetra){
    if(caracter == 1 | caracter == 2 | caracter == 3 | caracter == 4 | caracter == 5 | caracter == 6 | 
        caracter == 7 | caracter == 8 | caracter == 9){
        esLetra = false;
    }else{
        esLetra = true;
    }
    return esLetra;
}
console.log(cadenas2)