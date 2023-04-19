class Estudiante{
    constructor(nombre,apellido, edad, dni){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    creaObjetoEstudiante(){
        let estudiante = {nombre: this.nombre, apellido: this.apellido}
        return estudiante;
    }
}

class Curso{
    constructor(año, carrera){
        this.estudiante = estudiante
    }
    listaEstudiantes = []
    asignarEstudiante(){

    }
}

curso1 = new Curso("Reparacion", 2023, "Capacitación");
est1 = new Estudiante("pepe", "argento");
est2 = new Estudiante("lucas", "gonzales");


/*
1- Crear el estudiante
2- Crear el curso
3- Enviar el estudiante a la lista del curso
*/