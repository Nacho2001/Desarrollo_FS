//Clases
class Clinica{
    constructor(nombre = "Sanatorio",dueño = "Nacho",r_juridica = "Ignacio" ,doctores,enfermeros,pacientes){
        this.nombre = nombre
        this.dueño = dueño
        this.r_juridica = r_juridica
        this.doctores = doctores
        this.enfermeros = enfermeros
        this.pacientes = pacientes 
    };
    muestra(){ 
        informe.innerHTML += `<h2>Informe</h2>`
        informe.innerHTML += `<h4>Datos clínica</h4>`
        let info = document.createElement("p")
        info.textContent = ` 
            Nombre: ${this.nombre};
            Dueño: ${this.dueño};
            Responsabilidad Jurídica: ${this.r_juridica};`
        informe.appendChild(info)
        informe.innerHTML += `<h4>Pacientes</h4>`
        pacientesC.forEach(pin => {
            let pC = new Paciente(pin.nombre, pin.apellido, pin.dni, pin.fecha_nacimiento, pin.doc_enf,pin.obra_social, pin.nro_turno)
            pC.muestra_pacientes()
        });
        informe.innerHTML += `<h4>Doctores</h4>`
        doctores.forEach(element => {
            let docs = new Doctores(element.nombre,element.apellido,element.matricula,element.especialidad,element.pacientes)
            docs.datos_doc()
        });
        informe.innerHTML += `<h4>Enfermeros</h4>`
        enfermeros.forEach(element => {
            let enf = new Enfermeros(element.nombre, element.apellido, element.matricula, element.pacientes, element.licenciatura)
            enf.datos_enfermero()
        });

    };
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
    };
    get pacientes(){
        return this._pacientes;
    };
    datos(){
        let p = document.createElement("p")
        p.textContent =
        `Nombre: ${this.apellido}; ${this.nombre},
        Matricula: ${this.matricula}; Pacientes: `
        this.pacientes.forEach(element => {
            p.textContent += element
        });
        informe.appendChild(p)
    }
}
class Doctores extends Personal{
    constructor(nombre,apellido,matricula,especialidad,pacientes){
        super(nombre,apellido,matricula,pacientes)
        this.especialidad = especialidad
    };
    turno(){
        let turnoP = {nro_turno: unPaciente.nro_turno, apellido: unPaciente.apellido, nombre: unPaciente.nombre}
        this.pacientes.push("turno "+turnoP.nro_turno)
        enfermeros.forEach(element => {
            if (element.licenciatura == this.especialidad){
                element.pacientes.push("turno "+turnoP.nro_turno)
            }
        });
        return `Turno: ${turnoP.nro_turno}, Paciente: ${turnoP.apellido},${turnoP.nombre}`
    };
    datos_doc(){
        super.datos()
        let p3 = document.createElement("p") 
        p3.textContent = `Especialidad: ${this.especialidad}`
        informe.appendChild(p3)
    }
};
class Enfermeros extends Personal{
    constructor(nombre,apellido,matricula,pacientes,licenciatura){
        super(nombre,apellido,matricula,pacientes)
        this.licenciatura = licenciatura
    };
    datos_enfermero(){
        super.datos()
        let p4 = document.createElement("p")
        p4.textContent = `Licenciatura: ${this.licenciatura}`
        informe.appendChild(p4)
    };
};

class Paciente{
    constructor(nombre,apellido,dni,f_nacimiento,doc_enf,o_social,nro_turno){
        this._nombre = nombre
        this._apellido = apellido
        this._dni = dni
        this._f_nacimiento = f_nacimiento
        this._nro_turno = nro_turno
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
    get nro_turno(){
        return this._nro_turno
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
        let paciente = {nombre: this.nombre, apellido: this.apellido, dni: this.dni, fecha_nacimiento: this.f_nacimiento, edad: this.edad(), obra_social: this.o_social, nro_turno: this.nro_turno, doc_enf: this.doc_enf}
        pacientesC.push(paciente)
        return paciente
    }
    muestra_pacientes(){
        let p = document.createElement("p")
        p.textContent = `
        Nombre: ${this.nombre};
        Apellido: ${this.apellido};
        DNI: ${this.dni};
        Fecha de Nacimiento: ${this.f_nacimiento};
        Edad: ${this.edad()};
        Doctor: ${this.doc_enf};
        Obra social: ${this.o_social};
        Turno: ${this.nro_turno}; `
        informe.appendChild(p)
    }
}
//Declara arrays
let doctores = []
let enfermeros = []
let pacientesC = []

//Objetos doctores
let doc1 = {nombre: "Cristian", apellido: "García", especialidad: "Cirugia", matricula: 876539, pacientes:[]}
let doc2 = {nombre: "Marta", apellido: "Rios", especialidad: "Kinesiologia", matricula: 992357, pacientes:[]}

//Envia los doctores a un array de doctores
doctores.push(doc1,doc2)

// Objetos enfermeros
let enf1 = {nombre: "Luis", apellido: "Sanchez", matricula: 628323, licenciatura:"Kinesiologia",pacientes:[]}
let enf2 = {nombre: "Barbara", apellido: "Muñoz", matricula: 984354, licenciatura:"Cirugia",pacientes:[]}

//Envio de enfermeros al array
enfermeros.push(enf1,enf2)

//Declara nro de turno
let nro_turno = 0;
//Declara paciente individual
let unPaciente;
//Variable de confirmacion
let confirmacion
//Html para entregar informe
let informe = document.getElementById("informe")
// Datos para el select (seleccionar doctor)
doctores.forEach(element => {
    doc_enf.innerHTML += `<option value=${element.apellido}>${element.apellido},${element.nombre}</option>`
});


function carga(){
    nombre = document.getElementById("nombre").value
    apellido = document.getElementById("apellido").value
    dni = document.getElementById("dni").value
    f_nacimiento = document.getElementById("f_nacimiento").value
    doc_enf = document.getElementById("doc_enf").value
    o_social = document.getElementById("o_social").value
    nro_turno = nro_turno+1
    class_paciente = new Paciente(nombre,apellido,dni,f_nacimiento,doc_enf,o_social,nro_turno)
    unPaciente = class_paciente.ob_paciente()
    for (let i = 0; i < doctores.length; i++) {
        const element = doctores[i];
        class_doctores = new Doctores(element.nombre,element.apellido,element.matricula,element.especialidad,element.pacientes)
        if (unPaciente.doc_enf == element.apellido){
            let turno = class_doctores.turno()
            let turnos_fila = document.getElementById("turnos_div")
            let p = document.createElement('p')
            p.textContent = turno
            turnos_fila.appendChild(p)
        }
    }
    confirmacion = confirm("Desea cargar otro paciente?")
    if(confirmacion){
        limpiar_campos()
    }else{
        finalizar()
    }
}

function limpiar_campos(){
    nombre.value = ""
    apellido.value = ""
    dni.value = ""
    f_nacimiento.value = ""
    doc_enf.value = ""
    o_social.value = ""
}

function finalizar(){
    sanatorio = new Clinica()
    sanatorio.muestra()
}