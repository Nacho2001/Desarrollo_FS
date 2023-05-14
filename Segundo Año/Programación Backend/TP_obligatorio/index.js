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
        this.sueldo = 20000 // 20000 es el salario básico de los empleados
    }
    reasignacionDespacho(nuevoDespacho){ // Reasigna al empleado a un despacho nuevo, que se recibe al invoca el metodo
        console.log(`Cambia el despacho de ${this.nombre} ${this.apellidos}, de N°${this.nroDespacho} a N°${nuevoDespacho}`)
        this.nroDespacho = nuevoDespacho;
    }
    imprimirEmpleado(){ // Añade los datos adicionales de un empleado al metodo imprimirPersona()
        super.imprimirPersona()
        console.log(`Año de Incorporación: ${this.añoIncorporacion}, Número de Despacho: ${this.nroDespacho}`)
    }
    salarioEmpleado(salarioBruto){ // Calculo del salario de un empleado teniendo el cuenta ciertas condiciones
        let salarioFinal = salarioBruto
        // Aumento del 5% a los que ingresaron luego del 2016
        if (this.añoIncorporacion > 2016) {
            salarioFinal = salarioFinal+(salarioFinal*5/100) 
        }
        // Descuento del 8% a quien tengan dni iniciado en 11
        let inicioDNI = this.dni.slice(0,2)
        if(inicioDNI == 11){
            salarioFinal = salarioFinal-(salarioFinal*8/100)
        }
        return salarioFinal;
    }
}

class Docente extends Empleados{ // Clase Docente añade el departamento o materia que de la que se encarga el profesor
    constructor(nombre, apellidos, estadoCivil, dni, añoIncorporacion, nroDespacho,departamento,tipoClase, sueldo, salarioEmpleado){
        super(nombre, apellidos, estadoCivil, dni, añoIncorporacion, nroDespacho, tipoClase, sueldo, salarioEmpleado);
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
    obtenerSalarioDocente(){ /* Inicia el proceso de calculo de salario, primero recibe el aumento correspondiente y luego se toman en cuenta las condiciones de salarioEmpleado(),
        El cual recibe el sueldo con la primera modificación */
        // Los docentes tienen un 20% más del sueldo básico
        let salarioBruto = this.sueldo+(this.sueldo*20/100)
        this.sueldo = super.salarioEmpleado(salarioBruto)
    }
}

class Personal extends Empleados{
    // Al igual que la clase Docente, recibe los atributos de Persona y Empleado y añade la sección a cargo del empleado de servicio
    constructor(nombre, apellidos, estadoCivil, dni, añoIncorporacion, nroDespacho,seccion,tipoClase, sueldo, salarioEmpleado){
        super(nombre, apellidos, estadoCivil, dni, añoIncorporacion, nroDespacho,tipoClase, sueldo, salarioEmpleado);
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
    obtenerSalarioPersonal(){ // Inicia el calculo del sueldo, con la primera modificación, luego llama a salarioEmpleado() para las otras modificaciones
        // Los empleados de personal de servicio tienen un 15% más del sueldo básico
        let salarioBruto = this.sueldo+(this.sueldo*15/100)
        this.sueldo = super.salarioEmpleado(salarioBruto)
    }
}

class Centro{ // Crea el objeto centro con los arreglos para cada tipo de persona
    constructor(){
        this.personas = []; // En este arreglo se incluye a todas las personas vinculadas al centro tanto alumnos como empleados
        this.alumnos = [];
        this.profesores = [];
        this.personalServicio = [];
    }
    alta(persona){ // Da de alta una persona que se envia como parámetro
        // Lo carga en el arreglo personas
        this.personas.push(persona)
        // De acuerdo, al tipo de clase, lo envia al contenedor correspondiente
        switch (persona.tipoClase()) {
            case 'Estudiante':
                this.alumnos.push(persona)
                break;
            case 'Docente':
                this.profesores.push(persona)
                break;
            case 'Personal_servicio':
                this.personalServicio.push(persona)
                break;
        }
    }
    baja(identificacion){
        // Para dar de baja a una persona, requiere su dni (identificacion)
        for (let i = 0; i < this.personas.length; i++) { // Recorre el conatainer Personas, buscando a la persona que coincida con el dni ingresado
            const unaPersona = this.personas[i];
            let dni = unaPersona.obtenerDNI() // Obtiene el dni llamando al método obtenerDNI()
            if(dni == identificacion){ // Cuando encuentra una coincidencia, lo borra del arreglo Personas y el otro que corresponda según el tipo de Clase
                this.personas.splice(i,1)
                switch (unaPersona.tipoClase()) {
                    case 'Estudiante': // La persona también se localiza por el dni en los otros arrays.
                        for (let index = 0; index < this.alumnos.length; index++) {
                            const estudiante = this.alumnos[index];
                            let dni = estudiante.obtenerDNI()
                            if(dni == identificacion){
                                this.alumnos.splice(index,1) // Cuando lo encuentra, lo elimina
                            }
                        }
                        break;
                    case 'Docente':
                        for (let index = 0; index < this.profesores.length; index++) {
                            const profesor = this.profesores[index];
                            let dni = profesor.obtenerDNI()
                            if(dni == identificacion){
                                this.profesores.splice(index,1)
                            }
                        }
                        break;
                    case 'Personal_servicio':
                        for (let index = 0; index < this.personalServicio.length; index++) {
                            const profesor = this.personalServicio[index];
                            let dni = profesor.obtenerDNI()
                            if(dni == identificacion){
                                this.personalServicio.splice(index,1)
                            }
                        }
                        break;
                }
            }
        }
    }
    imprimirPersonas(){ // Imprime todos los datos de las personas del centro
        for (let i = 0; i < this.personas.length; i++) {
            const unaPersona = this.personas[i]; // Recorre el arreglo personas y llama a los métodos correspondientes, el valor de tipoClase()
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
    imprimirSalarios(){
        // Crea arreglo empleados concatenando los arreglos de profesores y personal de servicio
        let empleados = this.profesores.concat(this.personalServicio);
        // Recorre el array de empleados y ejecuta los métodos para obtener los salarios
        for (let i = 0; i < empleados.length; i++) {
            const empleado = empleados[i];
            switch (empleado.tipoClase()) {
                case 'Docente':
                    empleado.obtenerSalarioDocente()
                    break;
                case 'Personal_servicio':
                    empleado.obtenerSalarioPersonal()
                    break;
            }
            // Luego, imprime los datos solicitados: Nombre, apellidos y el salario
            console.log(`Nombre: ${empleado.nombre} ${empleado.apellidos}, Sueldo: ${empleado.sueldo}`)
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

// Testing de los métodos de las clases (Primera parte)
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
// Testing metodos Centro (segunda parte)
pruebaMetodosCentro = () => {
    // Da de alta a las personas creadas
    centro1.alta(alumno);
    centro1.alta(profesor);
    centro1.alta(servicio);
    // Da de baja a uno
    centro1.baja(22889573);
    // Luego imprime los datos de las personas cargadas
    centro1.imprimirPersonas();
    // Separador
    console.log("-----");
    // Muestra los salarios de los empleados (no mostrará el salario de los empleados eliminados)
    centro1.imprimirSalarios()
}

// Inicio de funciones: 
//pruebaMetodos();
//pruebaMetodosCentro();
