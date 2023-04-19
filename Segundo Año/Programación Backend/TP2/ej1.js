class Estudiante{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    creaObjetoEstudiante(){
        let estudiante = {nombre: this.nombre, apellido: this.apellido}
        return estudiante;
    }
}

class Curso{
    constructor(estudiante){
        this.estudiante = estudiante
    }
    listaEstudiantes = []

    crearEstudiante(){
        new Estudiante(estudiante[0], estudiante[1])
    }
    asignarEstudiante(){

    }
}

let estudiante1 = ["pepe", "argento"];
new Curso(estudiante1);

/*
1- Crear el estudiante
2- Crear el curso
3- Enviar el estudiante a la lista del curso
*/