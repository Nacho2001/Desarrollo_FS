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
}

class Estudiante extends Persona{
    constructor(nombre, apellidos, estadoCivil, dni,curso){
        super(nombre, apellidos, estadoCivil, dni)
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
}

class Empleados extends Persona{
    constructor(nombre, apellidos, estadoCivil, dni, añoIncorporacion, nroDespacho){
        super(nombre, apellidos, estadoCivil, dni);
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
        super(nombre, apellidos, estadoCivil, dni, añoIncorporacion, nroDespacho);
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
}

class Personal extends Empleados{
    constructor(nombre, apellidos, estadoCivil, dni, añoIncorporacion, nroDespacho,seccion){
        super(nombre, apellidos, estadoCivil, dni, añoIncorporacion, nroDespacho);
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
}

class Centro extends Persona{
    constructor(nombre,apellidos, estadoCivil, dni, rol){
        super(nombre, apellidos, estadoCivil, dni);
        this.alumnos = [];
        this.profesores = [];
        this.personalServicio = [];
        this.rol = rol;
    }
    alta(){
        let persona = new Persona(this.nombre, this.apellidos, this.estadoCivil, this.dni)
        switch (this.rol){
            case "estudiante":
                this.alumnos.push(persona);
                break;
            case "personal":
                this.personalServicio.push(persona);
                break;
            case "profesores":
                this.profesores.push(persona);
                break;
        }
    }
    baja(){// Consultar sobre el arreglo Personas

    }
}

Personas = [];
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
