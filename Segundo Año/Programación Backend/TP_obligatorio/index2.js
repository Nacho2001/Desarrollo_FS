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
    tipoClase(){
        return 'Persona';
    }
    obtenerDNI(){
        return this.dni;
    }
}

class Estudiante extends Persona{
    constructor(nombre, apellidos, estadoCivil, dni,curso, tipoClase){
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
    constructor(nombre, apellidos, estadoCivil, dni, añoIncorporacion, nroDespacho,tipoClase){
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
    constructor(nombre, apellidos, estadoCivil, dni, añoIncorporacion, nroDespacho,departamento,tipoClase){
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
    constructor(nombre, apellidos, estadoCivil, dni, añoIncorporacion, nroDespacho,seccion,tipoClase){
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
    }
    alta(persona){
        this.personas.push(persona)
    }
    baja(identificacion){// Consultar sobre el arreglo Personas
        for (let i = 0; i < this.personas.length; i++) {
            const unaPersona = this.personas[i];
            let dni = unaPersona.obtenerDNI()
            if(dni == identificacion){
                this.personas.splice(i,1)
            }
        }
    }
    imprimirPersonas(){
        for (let i = 0; i < this.personas.length; i++) {
            const unaPersona = this.personas[i];
            switch (unaPersona.tipoClase()) {
                case 'Estudiante':
                    unaPersona.imprimirEstudiante()
                    break;
                case 'Docente':
                    unaPersona.imprimirDocente()
                    break;
                case 'Personal_servicio':
                    unaPersona.imprimirPersonal()
                    break;
            }
        }
    }
}
let centro1 = new Centro()
//Crea un estudiante
let alumno = new Estudiante("Adam", "Sandler", 44332211, "Casado","Actuación");
// Nuevo Profesor
let profesor = new Docente("Emmet","Brown", 11223344, "Casado", 2015, 4, "Física");
// Crea miembro del personal
let servicio = new Personal("Dario", "Barassi", 22889573, "Casado", 2019, 16, "Decanato");

centro1.alta(alumno)
centro1.alta(profesor)
centro1.alta(servicio)
centro1.baja(44332211);
centro1.imprimirPersonas();

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

//pruebaMetodos();
