class Persona{
    constructor(nombre, apellidos, dni, estadoCivil){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.estadoCivil = estadoCivil;
    }
    cambioEstadoCivil(nuevoEC){
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
        this.nroDespacho = nuevoDespacho;
    }
}

class Docente extends Empleados{
    constructor(nombre, apellidos, estadoCivil, dni, añoIncorporacion, nroDespacho,departamento){
        super(nombre, apellidos, estadoCivil, dni, añoIncorporacion, nroDespacho);
        this.departamento = departamento;
    }
    cambioDepartamento(nuevoDepartamento){
        this.departamento = nuevoDepartamento;
    }
}

class Personal extends Empleados{
    constructor(nombre, apellidos, estadoCivil, dni, añoIncorporacion, nroDespacho,seccion){
        super(nombre, apellidos, estadoCivil, dni, añoIncorporacion, nroDespacho);
        this.seccion = seccion;
    }
    traslado(nuevaSeccion){
        this.seccion = nuevaSeccion;
    }
}

Personas = [];
new Estudiante("Adam", "Sandler", 44332211, "Casado","Actuación").imprimirEstudiante()
