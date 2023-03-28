/*
et escuela(){ //Obtiene la propiedad privada de una clase
    return this.escuela
}

//Las propiedades que son privadas son solo lectura

saludo(){
    super().saludo // Accede a saludo

}
/* Define un objeto para la clase
 let nuevoObjeto = new Clase('parametro1', 'parametro2') */

// Con _ al principio del nombre de la propiedad, esta se convierte en propiedad privada

// Utilizado el setter en lugar de un get, permite sobreescribir el valor de una propiedad privada ej:
/*
set escuela(nuevaEscuela){
    this._escuela = nuevaEscuela // Pisa el valor de una propiedad privada
} */
/*

Utilizar propiedad privada en las clases es encapsulamiento
get = solamente obtener una propiedad privada
set = sobreescribir una propiedad privada */

