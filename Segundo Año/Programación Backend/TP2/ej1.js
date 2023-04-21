class Estudiante{
    constructor(nombre,apellido, edad, dni){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    creaEstudiante(){
        let estudiante = {nombre: this.nombre, apellido: this.apellido}
        return estudiante;
    }
}

class Curso{
    constructor(nombre,año, carrera){
        this.nombre = nombre
        this.año = año
        this.carrera = carrera
    }
    listaEstudiantes = []

    asignarEstudiante(alumno){
        this.alumno = alumno
        alumno.push(listaEstudiantes)
    }

    crearCurso(){
        
    }
}

curso1 = new Curso("Reparacion", 2023, "Capacitación");
est1 = new Estudiante("pepe", "argento");
est2 = new Estudiante("lucas", "gonzales");
est1.asignarEstudiante();
est2.asignarEstudiante();


/*
1- Crear el estudiante
2- Crear el curso
3- Enviar el estudiante a la lista del curso
*/