/** Obtiene array declarado en otro archivo */
import '../numsArray.dart';

/** Variables de nro mayor y menor */
int mayor = -9999;
int menor = 9999;

/** Función principal */
void main(){
  /** Recorre el array con forEach */
 numbers.forEach((numero){
  /** Si el numero seleccionado es menor que el numero guardado, lo reemplaza*/
  if(numero > mayor) mayor = numero;
  /** Si es menor que el anterior almacenado, lo pisa */
  if(numero < menor) menor = numero;
 }); 
 /** Cuando termina, muestra los numeros mayor y menor encontrados */
 print("""
  El mayor de los números es: ${mayor} y
  el menor es: ${menor}
  """);
}