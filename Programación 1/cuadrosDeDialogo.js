// Tipos de cuadro de diálogo
/*alert("Alerta!!") // Cuadro de alerta
let numero = parseInt(prompt("Ingrese un número")) // Cuadro de dialogo tipo cadena de caracteres, por eso si hay que parsearlo
console.log(confirm("desea continuar?"))*/ // Cuadro de diálogo que se indica true o false
// Con el console log, la respuesta del confirm, se redirigirá a la terminal

function suma(){
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = numero1+numero2
}

function resta(){
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = numero1-numero2
}

function multiplicacion(){
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = numero1*numero2
}

function division(){
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    if (numero2 == 0){
        alert("No se puede hacer la operación")
    }else{
        document.getElementById("resultado").innerHTML = numero1/numero2
    }

}
