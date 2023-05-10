class Persona{
    constructor(nombre, apellidos, dni, estadoCivil){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.estadoCivil = estadoCivil;
    }
    cambioEstadoCivil(nuevoEC){
        console.log(`Cambio de estado civil de ${this.nombre} ${this.apellidos} de ${this.estadoCivil} a ${nuevoEC}`)
        this.estadoCivil = nuevoEC;
    }
    imprimirPersona(){
        console.log(`Nombre: ${this.nombre}, Apellidos: ${this.apellidos}, DNI: ${this.dni}, Estado Civil: ${this.estadoCivil},`)
    }
<<<<<<< HEAD
    tipoClase(){
        return 'Persona';
    }
    obtenerDNI(){
=======
    presentaDNI(){
>>>>>>> 4a66b7448b5927f90ab5af0fddb3bcdea5c9d111
        return this.dni;
    }
}

class Estudiante extends Persona{
    constructor(nombre, apellidos, estadoCivil, dni,curso){
        super(nombre, apellidos, estadoCivil, dni,tipoClase)
        this.curso = curso
    };
    reasignacion(nuevoCurso){
        console.log(`Reasignación de ${this.nombre} ${this.apellidos} de ${this.curso} a ${nuevoCurso}`)
        this.curso = nuevoCurso;
    }
    imprimirEstudiante(){
        super.imprimirPersona()
        console.log(`Curso: ${this.curso}`)
    }
    tipoClase(){
        return 'Estudiante';
    }
}

class Empleados extends Persona{
    constructor(nombre, apellidos, estadoCivil, dni, añoIncorporacion, nroDespacho){
        super(nombre, apellidos, estadoCivil, dni,tipoClase);
        this.añoIncorporacion = añoIncorporacion;
        this.nroDespacho = nroDespacho;
    }
    reasignacionDespacho(nuevoDespacho){
        console.log(`Cambia el despacho de ${this.nombre} ${this.apellidos}, de N°${this.nroDespacho} a N°${nuevoDespacho}`)
        this.nroDespacho = nuevoDespacho;
    }
    imprimirEmpleado(){
        super.imprimirPersona()
        console.log(`Año de Incorporación: ${this.añoIncorporacion}, Número de Despacho: ${this.nroDespacho}`)
    }
}

class Docente extends Empleados{
    constructor(nombre, apellidos, estadoCivil, dni, añoIncorporacion, nroDespacho,departamento){
        super(nombre, apellidos, estadoCivil, dni, añoIncorporacion, nroDespacho, tipoClase);
        this.departamento = departamento;
    }
    cambioDepartamento(nuevoDepartamento){
        this.departamento = nuevoDepartamento;
        console.log(`${this.nombre} ${this.apellidos} reasignado a ${this.departamento}`)
    }
    imprimirDocente(){
        super.imprimirEmpleado()
        console.log(`Departamento: ${this.departamento}`)
    }
    tipoClase(){
        return 'Docente'
    }
}

class Personal extends Empleados{
    constructor(nombre, apellidos, estadoCivil, dni, añoIncorporacion, nroDespacho,seccion){
        super(nombre, apellidos, estadoCivil, dni, añoIncorporacion, nroDespacho,tipoClase);
        this.seccion = seccion;
    }
    traslado(nuevaSeccion){
        this.seccion = nuevaSeccion;
        console.log(`${this.nombre} ${this.apellidos} trasladado a sección ${this.seccion}`)
    }
    imprimirPersonal(){
        super.imprimirEmpleado()
        console.log(`Sección: ${this.seccion}`)
    }
    tipoClase(){
        return 'Personal_servicio'
    }
}

class Centro{
    constructor(){
        this.personas = [];
        this.alumnos = [];
        this.profesores = [];
        this.personalServicio = [];
    }
<<<<<<< HEAD
    alta(persona){
        this.personas.push(persona)
        switch (persona.tipoClase) {
            case 'Estudiante':
                this.alumnos.push(persona)
=======
    alta(){
        let persona = new Persona(this.nombre, this.apellidos, this.estadoCivil, this.dni);
        Personas.push(persona);
        switch (this.rol){
            case "estudiante":
                this.alumnos.push(persona);
>>>>>>> 4a66b7448b5927f90ab5af0fddb3bcdea5c9d111
                break;
            case 'Docente':
                this.profesores.push(persona)
                break;
            case 'Personal_servicio':
                this.personalServicio.push(persona)
                break;
        }
    }
<<<<<<< HEAD
    baja(identificacion){// Consultar sobre el arreglo Personas
        for (let index = 0; index < this.personas.length; index++) {
            const persona = Personas[index];
            let dni = persona.obtenerDNI()
            if(dni == identificacion){
                Personas.splice(index)
            }
        }
        switch (persona.tipoClase) {
            case 'Estudiante':
                for (let index = 0; index < this.alumnos.length; index++) {
                    const estudiante = this.alumnos[index];
                    let dni = estudiante.obtenerDNI()
                    if(dni == identificacion){
                        this.alumnos.splice(index)
                    }
                }
                break;
            case 'Docente':
                for (let index = 0; index < this.profesores.length; index++) {
                    const profesor = this.preofesores[index];
                    let dni = profesor.obtenerDNI()
                    if(dni == identificacion){
                        this.profesores.splice(index)
                    }
                }
                break;
            case 'Personal_servicio':
                for (let index = 0; index < this.personalServicio.length; index++) {
                    const profesor = this.personalServicio[index];
                    let dni = profesor.obtenerDNI()
                    if(dni == identificacion){
                        this.personalServicio.splice(index)
                    }
                }
                break;
        }
    }
    imprimirPersonas(){

    }
}
let centro1 = new Centro()
=======
    baja(){// Consultar sobre el arreglo Personas
        for (let i = 0; i < Personas.length; i++) {
            const elemento = Personas[i];
            
        }
    }
}

let Personas = [];
>>>>>>> 4a66b7448b5927f90ab5af0fddb3bcdea5c9d111
//Crea un estudiante
let alumno = new Estudiante("Adam", "Sandler", 44332211, "Casado","Actuación");
// Nuevo Profesor
let profesor = new Docente("Emmet","Brown", 11223344, "Casado", 2015, 4, "Física");
// Crea miembro del personal
let servicio = new Personal("Dario", "Barassi", 22889573, "Casado", 2019, 16, "Decanato");

pruebaMetodos = () => {
    //Imprime datos de las personas del centro
    alumno.imprimirEstudiante()
    profesor.imprimirDocente();
    servicio.imprimirPersonal();
    console.log("-----");
    //Cambio estado civil de estudiante
    alumno.cambioEstadoCivil("Divorciado");
    // Nuevo despacho de profesor
    profesor.reasignacionDespacho(2);
    // Matricular estudiante a nuevo curso
    alumno.reasignacion("Dirección");
    // Nuevo departamento del personal de servicio
    profesor.cambioDepartamento("Matemática");
    // Nueva sección del personal
    servicio.traslado("Biclioteca");
    console.log("-----");
    // Imprime los datos actualizados
    alumno.imprimirEstudiante()
    profesor.imprimirDocente();
    servicio.imprimirPersonal();
}

pruebaMetodos();
