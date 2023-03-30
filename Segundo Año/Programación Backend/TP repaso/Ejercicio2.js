let caracteres = "murcielago";
// Apunte: Para enviar datos a una funcion, enviarlos como parámetros

let detectar_vocales = (array_inicial) => {
    let solo_vocales = [];
    for (let index = 0; index < array_inicial.length; index++) {
        const element = array_inicial[index];
        if (element == "a" | element == "e" | element == "i" | element == "o" | element == "u"){
            solo_vocales.push(element);
        }
    }
    return(solo_vocales);
}

console.log("El arreglo inicial es: "+'"'+caracteres+'"')
console.log("Las vocales del array son: ["+detectar_vocales(caracteres)+"]");