ac="Fuente";

function contarFs(cadena){
    let cont = 0
    for (let index = 0; index < cadena.length; index++) {
        const element = cadena[index];
        if(element == "F"){
            cont++
        }
    }
    console.log("Cantidad de F: "+cont);
}

function contarCaracteres(cadena){
    let cont = 0;
    let caracter = "e";
    for (let index = 0; index < cadena.length; index++) {
        const element = cadena[index];
        if(element == caracter){
            cont++
        }
    }
    console.log("Cantidad de "+caracter+": "+cont);
}

contarFs(ac);
contarCaracteres(ac);