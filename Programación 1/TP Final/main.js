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
    get nombre(){
        return this._nombre
    };
    get apellido(){
        return this._apellido
    };
    get matricula(){
        return this._matricula
    }
    get pacientes(){
        return this._pacientes
    };
}
 // Crear un metodo para agregar paciente
 //Utilizar un arreglo para mapear el arreglo de pacientes y redirigirlo a un arreglo de pacientes de x doctor
class Doctores extends Personal{
    constructor(nombre,apellido,matricula,pacientes,especialidad){
        super(nombre,apellido,matricula,pacientes);
        this.especialidad = especialidad
    };
    turnos_doc(){
        // Lee el arreglo de pacientes y lee el medico que solicitó, luego lo carga en el array del medico correspondiente
        for (let i = 0; i < personal.length; i++) {
            const medico = personal[i];
            for (let i2 = 0; i2 < pacientes.length; i2++) {
                const paciente = pacientes[i];
                if (paciente.medico = medico.apellido) {
                    turnos_
                }
            }
        }

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
    constructor(nombre,apellido,dni,f_nacimiento,turno,medico,o_social){
        this._nombre = nombre
        this._apellido = apellido
        this._dni = dni
        this._f_nacimiento = f_nacimiento
        this._turno = turno
        this.medico = medico
        this._o_social = o_social
    };
    get nombre(){
        return this._nombre
    };
    get apellido(){
        return this._apellido
    };
    get dni(){
        return dni
    };
    get f_nacimiento(){
        return this._f_nacimiento
    }
    get turno(){
        return this._turno
    };
    get o_social(){
        return this.o_social
    }
    edad(){ //calculo de edad
        let f_hoy = new Date() // fecha actual
        f_nacimiento = new Date(this.f_nacimiento) // fecha nacimiento tipo date
        let diferencia = f_hoy.getTime() - f_nacimiento.getTime() // Realiza la resta en milisegundos
        return Math.trunc(diferencia / 31536000000) // Convierte el resultado en años y lo entrega
    }
    ob_paciente(){ //Crea objeto paciente
        let paciente = {nombre: this.nombre, apellido: this.apellido, dni: this.dni, fecha_nacimiento: this.f_nacimiento, edad: this.edad(), obra_social: this.o_social, turno: this.turno, medico: this.medico}
        pacientes.push(paciente)
    }
    muestra_datos_p(){

    }
}

//Inicio del programa
//Definicion de arreglos
// 1- Crear los arreglos que contendrán los datos
let personal = []
let doctores = []
let enfermeros = []
let pacientes = []
let turnos = []
// Define turnos
let turno = 0

// 2- Carga los objetos doctores y enfermeros al array:
let doc1 = {nombre: "Cristian", apellido: "García", especialidad: "Cirugía", matricula: 876539}
let doc2 = {nombre: "Marta", apellido: "Rios", especialidad: "Kinesiología", matricula: 992357}
let enf1 = {nombre: "Luis", apellido: "Sanchez", especialidad:"Oftalmología", licenciatura:"Licenciado en oftalmología"}
let enf2 = {nombre: "Barbara", apellido: "Muñoz", especialidad: "Cirugia", licenciatura:"Licenciada en Cirugia"}
personal.push(doc1,doc2,enf1,enf2)


// 3° Mostrar los apellidos del personal en el select
let select = document.getElementById("docenf")
for (let i = 0; i < personal.length; i++) {
    const element = personal[i];
    select.innerHTML += `<option value="${element.apellido}">${element.apellido}, ${element.nombre}</option>`
}

// Crea un arreglo para cada uno de los doctores/enfermeros
for (let i = 0; i < personal.length; i++) {
    const element = personal[i].apellido;
    let t_$element = ["1"]
    console.log(element)
}

// Obtener los datos
function carga(){ // Funcion que toma los datos del paciente luego de pulsar el boton
    let nombreC = document.getElementById("nombreC").value
    let apellidoC = document.getElementById("apellidoC").value
    let dni = document.getElementById("dni").value
    let f_nacimiento = document.getElementById("f_nacimiento").value
    let medico = select.value
    let o_social = document.getElementById("o_social").value
    turno = turno+1
    class_paciente = new Paciente(nombreC,apellidoC,dni,f_nacimiento,medico,o_social,turno) // Enviar los datos a la clase Paciente
    class_paciente.ob_paciente()

}