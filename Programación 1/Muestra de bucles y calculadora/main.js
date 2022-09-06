//ingrese por pantalla la edad de una persona y muestre si es mayr de edad
let edad = parseInt(prompt("Ingrese una edad"));

if ( edad>= 18) {
    document.write("la persona de " + edad + " años es mayor de edad");
}else {
    document.write("es menor")
}
//ejemplo de uso de la estructura do while
do {
    let condicion = confirm("quiere seguir?")
    console.log("usted ha apretado "+ condicion)
} while (condicion);    
var arreglo = [1,2,3,7,12,true,"julian"]
arreglo[1]=5
//recorrido de arreglo con for of
for (let item of arreglo) {
    document.write(item+"<br>")
}
//recorrido de arreglo con un for atraves del indice
for (let i = 0; i < arreglo.length; i++) {
    document.write(arreglo[i]+"<br>");
}
