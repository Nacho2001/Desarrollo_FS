class Rectangulo{
    constructor(lado1,lado2){
        this.l1 = lado1;
        this.l2 = lado2;

    }
    perimetro(){
        //Opcion 1
        /*let resultado = this.l1*2+this.l2*2 // Calculo del perimetro del rectangulo
        return resultado // Imprime el resultado */

        // Opcion 2
        return this.l1*2+this.l2*2
    }

    superficie(){
        return this.lado1*this.lado2
    }
    datos(){
        return "el rectangulo de lado "+this.l1+" y "+this.l2+" tiene un area de: "+this.superficie()
        // El metodo en el this se debe declarar con los parentesis
    }
}
//Ingresa los lados por el prompt
let lado1 = parseInt(prompt("Ingrese un nro"))
let lado2 = parseInt(prompt("Ingrese otro número"))

// Le paso los parametros a la clase
let rec1 = new Rectangulo(lado1,lado2) 
console.log(rec1.datos())
