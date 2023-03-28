class Persona{
    constructor(nombre, apellido, dni, a_n, cuil, genero){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.a_n = a_n;
        this.cuil = cuil;
        this.genero = genero;
    };

    edad(){
        return 2022-this.a_n
    };

    datos(){
        return `Los datos de usuario ingresados son: <br>
        Nombre Completo: ${nombre} ${apellido} <br>
        Dni: ${dni} <br> 
        Año de nacimiento: ${a_n} <br> 
        Edad: `+this.edad()+`<br>
        Cuil: ${cuil} <br> 
        Genero: ${genero}`
    };
};

let nombre = document.getElementById("nombre").value;
let apellido = document.getElementById("apellido").value;
let dni = document.getElementById("dni").value;
let a_n = parseInt(document.getElementById("a_n").value);
let cuil = document.getElementById("cuil").value;
let genero = document.getElementById("genero").value;

function lectura(){
    console.log("funcion activa")
    let data = new Persona(nombre,apellido,dni,a_n,cuil,genero);
    console.log(nombre);
    document.getElementById("rta").innerHTML = data.datos();
};
