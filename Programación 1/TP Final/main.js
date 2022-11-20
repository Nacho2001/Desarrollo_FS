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
    generador_turnos(){
        // Compara el apellido del profesional solicitado con el del actual tomado por la clase, si coincide, envia un arreglo con el turno
        if(cliente.doc_enf == this.apellido){
            let turno = {turno: cliente.turno, apellido: cliente.apellido, nombre: cliente.nombre}
            this.pacientes.push(turno)
            turnos.push(turno)
        }
    }
}
 // Crear un metodo para agregar paciente
 //Utilizar un arreglo para mapear el arreglo de pacientes y redirigirlo a un arreglo de pacientes de x doctor
class Doctores extends Personal{
    constructor(nombre,apellido,matricula,pacientes,pacientes_med,especialidad){
        super(nombre,apellido,matricula,pacientes,pacientes_med);
        this.especialidad = especialidad
    };
    turnos_doc(){
        for (let i = 0; i < turnos.length; i++) {
            const element = turnos[i];
            return element
        }
    }; 

}

class Enfermeros extends Personal{
    constructor(nombre,apellido,matricula,pacientes,licenciatura){
        super(nombre,apellido,matricula,pacientes)
        this.licenciatura = licenciatura
    }
}

class Paciente{
    constructor(nombre,apellido,dni,f_nacimiento,doc_enf,o_social,turno){
        this._nombre = nombre
        this._apellido = apellido
        this._dni = dni
        this._f_nacimiento = f_nacimiento
        this._turno = turno
        this.doc_enf = doc_enf
        this._o_social = o_social
    };
    get nombre(){
        return this._nombre
    };
    get apellido(){
        return this._apellido
    };
    get dni(){
        return this._dni
    };
    get f_nacimiento(){
        return this._f_nacimiento
    };
    get turno(){
        return this._turno
    };
    get o_social(){
        return this._o_social
    }
    edad(){ //calculo de edad
        let f_hoy = new Date() // fecha actual
        f_nacimiento = new Date(this.f_nacimiento) // fecha nacimiento tipo date
        let diferencia = f_hoy.getTime() - f_nacimiento.getTime() // Realiza la resta en milisegundos
        return Math.trunc(diferencia / 31536000000) // Convierte el resultado en años y lo entrega
    }
    ob_paciente(){ //Crea objeto paciente y lo carga en arreglo
        let paciente = {nombre: this.nombre, apellido: this.apellido, dni: this.dni, fecha_nacimiento: this.f_nacimiento, edad: this.edad(), obra_social: this.o_social, turno: this.turno, doc_enf: this.doc_enf}
        pacientes.push(paciente)

    }
    muestra_datos_p(){
        for (let i = 0; i < pacientes.length; i++) {
            const element = pacientes[i];
            
        }
        
    }
}

//Inicio del programa
//Traer elementos desde html
let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let dni = document.getElementById("dni")
let f_nacimiento = document.getElementById("f_nacimiento")
let doc_enf = document.getElementById("doc_enf")
let o_social = document.getElementById("o_social")

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
let doc1 = {nombre: "Cristian", apellido: "García", especialidad: "Cirugía", matricula: 876539, pacientes:[]}
let doc2 = {nombre: "Marta", apellido: "Rios", especialidad: "Kinesiología", matricula: 992357, pacientes:[]}
doctores.push(doc1,doc2)
let enf1 = {nombre: "Luis", apellido: "Sanchez", matricula: 628323, licenciatura:"Licenciado en kinesiologia",pacientes:[]}
let enf2 = {nombre: "Barbara", apellido: "Muñoz", matricula: 984354, licenciatura:"Licenciada en Cirugia",pacientes:[]}
enfermeros.push(enf1,enf2)
personal.push(doctores,enfermeros)
//console.log(personal)


// 3° Mostrar los apellidos del personal en el select
for (let i = 0; i < personal.length; i++) {
    const element = personal[i];
    doc_enf.innerHTML += `<option value="${element.apellido}">${element.apellido}, ${element.nombre}</option>`
}
let cliente = {nombre: "nacho", apellido: "migoni", dni:43285976, f_nacimiento: 2001-04-07, doc_enf: "Rios", o_social:"Ipross",turno:1}
// Obtener los datos
function carga(){ // Funcion que toma los datos del paciente luego de pulsar el boton
    nombre = nombre.value
    apellido = apellido.value
    dni = dni.value
    f_nacimiento = f_nacimiento.value
    doc_enf = doc_enf.value
    o_social = o_social.value
    turno = turno+1
    // Enviar los datos a la clase Paciente
    class_paciente = new Paciente(cliente.nombre,cliente.apellido,cliente.dni,cliente.f_nacimiento,cliente.doc_enf,cliente.o_social,cliente.turno)
    class_paciente.ob_paciente()
    for (let i = 0; i < personal.length; i++) {
        const element = personal[i];
        for (let index = 0; index < element.length; index++) {
            const element2 = element[index];
            class_personal = new Personal(element2.nombre, element2.apellido,element2.matricula,element2.pacientes)
            class_personal.generador_turnos()
        } 
    }
    let confirmacion = confirm("Cargar otro paciente?")
    if(confirmacion){
        limpiar_campos()
    }else{
        class_paciente.muestra_datos_p()
    }
}

function limpiar_campos(){
    nombre.innerHTML = ''
    apellido.innerHTML = ''
    dni.innerHTML = ''
    f_nacimiento.innerHTML = ''
    doc_enf.innerHTML = ''
    o_social.innerHTML = ''
}

function informe(){

}