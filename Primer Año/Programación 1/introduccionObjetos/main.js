export default class Alumno{ // Exporta la clase alumno como módulo para poder abrirlo desde otro archivo
    constructor(nombre,apellido,anioNac,dni,direccion, egreso){
        this.n=nombre;
        this.ape=apellido;
        this.aN=anioNac;
        this.d=dni;
        this.dir=direccion;
        this.egreso=egreso // Se pasa como booleano
    }
    edad(){ // Metodo que calcula la edad
        let vuelta = '' // Si la variable se crea en el if, no se va a retornar
        if(this.aN>2000){
            vuelta = "millenial"
        }else{
            vuelta= "jovato"
        }
        let fechaActual = new Date()
        
        return vuelta
    }
    datos(){ //Metodo para imprimir los datos
        return this.nombre +', '+this.apellido
    }
}

