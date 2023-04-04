let empleados = ["Nicolas", "Norberto", "Eugenia", "Jeremias"];
let sueldos = [7000, 17000, 17000, 20000];

console.log("A- Buscar persona con mayor sueldo");
console.log("B- Buscar persona que cobra un valor ingresado");
console.log("C- Aumentar sueldos inferiores a $10.000");
console.log("D- Ver sueldo de determinada persona");

let rta = String;
rta = prompt("Su respuesta es: ", '');

let mayorSueldo = () => {
    let sueldoMayor = 0;
    let empleadoCaro = "";
    for (let i = 0; i < sueldos.length; i++) {
        if(sueldo[i] >= sueldoMayor){
            sueldoMayor = sueldo[i];
            empleadoCaro = empleados[i];
        }
    }
    console.log("La persona con mayor sueldo es: "+empleadoCaro+", con $"+sueldoMayor);
};

switch (rta) {
    case "a":
        mayorSueldo();
        break;

    default:
        console.log("Opción fuera de rango");
        break;
}