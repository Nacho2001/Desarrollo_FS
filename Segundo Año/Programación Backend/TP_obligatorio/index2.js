class Persona{ // Clase persona, crea el objeto persona
    constructor(nombre, apellidos, dni, estadoCivil){ // Define los atributos
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.estadoCivil = estadoCivil;
    }
    cambioEstadoCivil(nuevoEC){ // Cambia el estado civil de la persona, el cual es envia como parámetro
        console.log(`Cambio de estado civil de ${this.nombre} ${this.apellidos} de ${this.estadoCivil} a ${nuevoEC}`)
        this.estadoCivil = nuevoEC;
    }
    imprimirPersona(){ // Imprime los datos de la persona, genérico para cada una
        console.log(`Nombre: ${this.nombre}, Apellidos: ${this.apellidos}, DNI: ${this.dni}, Estado Civil: ${this.estadoCivil},`)
    }
    tipoClase(){ // Creacion del metodo tipo clase, el cual varia si la persona es estudiante, personal de servicio o docente
        return 'Persona';
    }
    obtenerDNI(){ // Obtiene el dni de la persona (simplemente lo retorna)
        return this.dni;
    }
}

class Estudiante extends Persona{ // Crea el objeto estudiante
    constructor(nombre, apellidos, estadoCivil, dni,curso, tipoClase){  // Define el curso de cada estudiante, los otros datos son heredados de Persona
        super(nombre, apellidos, estadoCivil, dni,tipoClase)
        this.curso = curso
    };
    reasignacion(nuevoCurso){ // Para asignar un nuevo curso, se reemplaza el actual por uno nuevo que se envia como parámetro
        console.log(`Reasignación de ${this.nombre} ${this.apellidos} de ${this.curso} a ${nuevoCurso}`)
        this.curso = nuevoCurso;
    }
    imprimirEstudiante(){ // Para imprimir los datos del estudiante, primero muestra los datos iniciales desde el método imprimirPersona y luego el curso que esta tomando
        super.imprimirPersona()
        console.log(`Curso: ${this.curso}`)
    }
    tipoClase(){ // Metodo que retorna la clase de la persona, el cual cambia a "estudiante" si la persona es alumno
        return 'Estudiante';
    }
}

class Empleados extends Persona{ // Esta clase registra los datos que deben saberse de un empleado, heredando algunos de Persona
    constructor(nombre, apellidos, estadoCivil, dni, añoIncorporacion, nroDespacho,tipoClase){
        super(nombre, apellidos, estadoCivil, dni,tipoClase);
        this.añoIncorporacion = añoIncorporacion;
        this.nroDespacho = nroDespacho;
    }
    reasignacionDespacho(nuevoDespacho){ // Reasigna al empleado a un despacho nuevo, que se recibe al invoca el metodo
        console.log(`Cambia el despacho de ${this.nombre} ${this.apellidos}, de N°${this.nroDespacho} a N°${nuevoDespacho}`)
        this.nroDespacho = nuevoDespacho;
    }
    imprimirEmpleado(){ // Añade los datos adicionales de un empleado al metodo imprimirPersona()
        super.imprimirPersona()
        console.log(`Año de Incorporación: ${this.añoIncorporacion}, Número de Despacho: ${this.nroDespacho}`)
    }
}

class Docente extends Empleados{ // Clase Docente añade el departamento o materia que de la que se encarga el profesor
    constructor(nombre, apellidos, estadoCivil, dni, añoIncorporacion, nroDespacho,departamento,tipoClase){
        super(nombre, apellidos, estadoCivil, dni, añoIncorporacion, nroDespacho, tipoClase);
        this.departamento = departamento;
    }
    cambioDepartamento(nuevoDepartamento){ // Reasignación de departamento, recibiendo el nuevo como parámetro
        this.departamento = nuevoDepartamento;
        console.log(`${this.nombre} ${this.apellidos} reasignado a ${this.departamento}`)
    }
    imprimirDocente(){  // Toma el método imprimir empleado y añade el atributo departamento, este es uno de los métodos más especializados
        super.imprimirEmpleado()
        console.log(`Departamento: ${this.departamento}`)
    }
    tipoClase(){ // Modifica el método tipoClase, que pasa a ser "Docente" cuando la persona es un profesor
        return 'Docente'
    }
}

class Personal extends Empleados{
    // Al igual que la clase Docente, recibe los atributos de Persona y Empleado y añade la sección a cargo del empleado de servicio
    constructor(nombre, apellidos, estadoCivil, dni, añoIncorporacion, nroDespacho,seccion,tipoClase){
        super(nombre, apellidos, estadoCivil, dni, añoIncorporacion, nroDespacho,tipoClase);
        this.seccion = seccion;
    }
    traslado(nuevaSeccion){ // Cambio de sección
        this.seccion = nuevaSeccion;
        console.log(`${this.nombre} ${this.apellidos} trasladado a sección ${this.seccion}`)
    }
    imprimirPersonal(){ // Imprime los atributos anteriores invocando el metodo imprimirEmpleado() y añade la sección
        super.imprimirEmpleado()
        console.log(`Sección: ${this.seccion}`)
    }
    tipoClase(){ // Se ajusta el metodo tipoClase para el personal de servicio
        return 'Personal_servicio'
    }
}

class Centro{ // Versión 2 de clase Centro, esta solamente utiliza un array sin distinguir roles.
    constructor(){ // Para cada centro, utiliza un nuevo arreglo Personas
        this.personas = [];
    }
    alta(persona){ // Al dar de alta a una persona, la suma al container
        this.personas.push(persona)
    }
    baja(identificacion){ // Recorre el arreglo Personas buscando una con dni que coincida con el parámetro (identificacion)
        for (let i = 0; i < this.personas.length; i++) {
            const unaPersona = this.personas[i];
            let dni = unaPersona.obtenerDNI()
            if(dni == identificacion){
                this.personas.splice(i,1) // Cuando encuentra coincidencia, elimina la persona
            }
        }
    }
    imprimirPersonas(){ // Pero aún require los diferentes tipos de clase porque tienen distintos métodos para imprimir los datos
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

// Crea el centro
let centro1 = new Centro()
//Crea un estudiante
let alumno = new Estudiante("Adam", "Sandler", "44332211", "Casado","Actuación");
// Nuevo Profesor
let profesor = new Docente("Emmet","Brown", "11223344", "Casado", 2015, 4, "Física");
// Crea miembro del personal
let servicio = new Personal("Dario", "Barassi", "22889573", "Casado", 2019, 16, "Decanato");

pruebaMetodos = () => {
    //Imprime datos de las personas del centro
    alumno.imprimirEstudiante()
    profesor.imprimirDocente();
    servicio.imprimirPersonal();
    // Separador
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
    // Separador
    console.log("-----");
    // Imprime los datos actualizados
    alumno.imprimirEstudiante()
    profesor.imprimirDocente();
    servicio.imprimirPersonal();
}

pruebaMetodosCentro = () => {
    // Da de alta a las personas creadas
    centro1.alta(alumno);
    centro1.alta(profesor);
    centro1.alta(servicio);
    // Da de baja a uno
    centro1.baja(22889573);
    // Luego imprime los datos de las personas cargadas
    centro1.imprimirPersonas();
}

// Inicio de funciones: 
//pruebaMetodos();
//pruebaMetodosCentro();