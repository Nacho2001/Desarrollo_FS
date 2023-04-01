let string = "Aguante JavaScript!";

let posicionParImpar = (cadenaCaracteres) => {
    // Declara arrays de caracteres pares e impares
    let pares = [];
    let impares = [];
    // Recorre el string
    for (let i = 0; i < cadenaCaracteres.length; i++) {
        const caracter = cadenaCaracteres[i];
        if((i % 2) == 0){ // Si al dividir la posición del caracter al dividir por 2, da resto 0, la posición es par
            // Si la posición es par, envia el caracter al array correspondiente
            pares.push(caracter);
        }else{
            // Si no es así, el caracter se lo considera impar y se envia al otro array
            impares.push(caracter);
        }
    }
    // Al terminar se muestran ambos arreglos:
    console.log("Caracteres Pares: ["+pares+"]");
    console.log("Caracteres Impares: ["+impares+"]");
}

posicionParImpar(string);