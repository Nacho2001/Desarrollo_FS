class Clinica{
    constructor(nombre,dueño,r_juridica,enfermeros,pacientes){
        this.nombre = nombre
        this.dueño = dueño
        this.r_juridica = r_juridica
        this.doctores = doctores // Ver array de doctores
        this.enfermeros = enfermeros // Ver array de enfermeros
        this.pacientes = pacientes 
    };
    muestra(){ //tomar un elemento html y enviar los datos de la clinica alli
        
    }
}

class Personal{
    constructor(nombre,apellido,matricula,pacientes){
        this._nombre = nombre
        this._apellido = apellido
        this._matricula = matricula
        this._pacientes = pacientes
    };
}
 // Crear un metodo para agregar paciente
 //Utilizar un arreglo para mapear el arreglo de pacientes y redirigirlo a un arreglo de pacientes de x doctor
class Doctores{
    constructor(nombre,apellido,matricula,pacientes,especialidad){
        super(nombre,apellido,matricula,pacientes);
        this.especialidad = especialidad
    };
    muestra_turnos(){

    };
    muestra_datos_doc(){

    }
}

class Enfermeros extends Personal{
    constructor(nombre,apellido,matricula,pacientes,licenciatura){
        super(nombre,apellido,matricula,pacientes)
        this.licenciatura = licenciatura
    }
}

class Paciente{
    constructor(nombre,apellido,dni,f_nacimiento,turno,o_social){
        this._nombre = nombre
        this._apellido = apellido
        this._dni = dni
        this._f_nacimiento = f_nacimiento
        this._turno = turno+1
        this._o_social = o_social
    }
    edad(){ //calculo de edad

    }
    muesta_datos_p(){ //muestra datos pacientes

    }
}

//Inicio del programa
//Definicion de arreglos
// 1- Crear los arreglos que contendrán los datos
let doctores = []
let enfermeros = []
let pacientes = []

// 2° Mostrar los doctores en el select
let select = document.getElementById("medenf").innerHTML // Toma el select del html
doctores.forEach(element => {
    select =+ `<option>${element}</option>`
});

// 3° Obtener los datos
function carga(){ // Funcion que toma los datos del paciente luego de pulsar el boton
    let nombreC = document.getElementById("nombreC").value
    let apellidoC = document.getElementById("apellidoC").value
    let dni = document.getElementById("dni").value
    let f_nacimiento = document.getElementById("f_nacimiento").value
    let medico = document.getElementById("medico").value
    let o_social = document.getElementById("o_social").value
    let paciente = new Paciente(nombreC,apellidoC,dni,f_nacimiento,medico,o_social) // Crea el objeto paciente y enviar los datos a la clase Paciente
}