class Estudiante{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    creaEstudiante(){
        let estudiante = {nombre: this.nombre, apellido: this.apellido}
        console.log("Estudiante creado");
        return estudiante;
    }
}

class Curso{
    constructor(nombre, año, carrera){
        this.nombre = nombre
        this.año = año
        this.carrera = carrera
    }
    listaEstudiantes = []

    asignarEstudiante(alumno){
        this.listaEstudiantes.push(alumno);
        console.log("Estudiante agregado con exito")
    }

    crearCurso(){
        let curso = { nombre: this.nombre, año: this.año, carrera: this.carrera}
        console.log("Curso creado");
        return curso;
    }

    mostrarListado(){
        for (let index = 0; index < this.listaEstudiantes.length; index++) {
            const element = this.listaEstudiantes[index];
            console.log("Estudiante "+(index+1)+": "+element.nombre+" "+element.apellido);
        }
    }
}

curso1 = new Curso(2023, "Capacitación", "Reparacion");
est1 = new Estudiante("pepe", "argento").creaEstudiante();
est2 = new Estudiante("lucas", "gonzales").creaEstudiante();
curso1.crearCurso();
curso1.asignarEstudiante(est1);
curso1.asignarEstudiante(est2);
curso1.mostrarListado();



/*
1- Crear el estudiante
2- Crear el curso
3- Enviar el estudiante a la lista del curso
*/