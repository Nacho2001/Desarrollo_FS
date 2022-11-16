class Clinica{
    constructor(nombre,dueno,r_juridica,enfermeros,pacientes){
        this.nombre = nombre
        this.dueno = dueno
        this.r_juridica = r_juridica
        this.doctores = doctores
        this.enfermeros = enfermeros
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
let doctores = []
let enfermeros = []
let pacientes = []

function carga(){
    let nombreC = document.getElementById("nombreC").value
    let apellidoC = document.getElementById("apellidoC").value
    let dni = document.getElementById("dni").value
    let f_nacimiento = document.getElementById("f_nacimiento").value
    let medico = document.getElementById("medico").value
    let o_social = document.getElementById("o_social").value
    let paciente = new Paciente(nombreC,apellidoC,dni,f_nacimiento,medico,o_social)
}