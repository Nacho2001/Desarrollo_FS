class Persona{
    constructor(nombre, apellido, dni, a_n, cuil, genero){
        this.nombre=nombre,
        this.apellido=apellido,
        this.dni=dni,
        this.a_n=a_n,
        this.cuil=cuil,
        this.genero=genero
    }

    edad(){
        return 2022-this.a_nacimiento
    }

    datos(){
        return `Los datos de usuario ingresados son: <br>
        Nombre Completo: ${nombre} ${apellido} <br>
        Dni: ${dni} <br> 
        Año de nacimiento: ${a_n} <br> 
        Edad: `+this.edad()+`<br>
        Cuil: ${cuil} <br> 
        Genero: ${genero}`
    }
}

let nombre = document.getElementById("nombre").innerHTML
let apellido = document.getElementById("apellido").innerHTML
let dni = document.getElementById("dni").innerHTML
let a_n = document.getElementById("a_n").innerHTML
let cuil = document.getElementById("cuil").innerHTML
let genero = document.getElementById("genero").innerHTML

let data = new Persona(nombre,apellido,dni,a_n,cuil,genero)
document.getElementById("rta").innerHTML = data.datos()