import 'dart:io';

import '../numsArray.dart';

/** Lista de nro pares */
List<int> onlyPares = [];

/** Función principal */
void main(){
  /** Recorre la lista completo */
  numbers.forEach((numero){
    /** Comprueba si es par ( % 2 = 0 ) 
     * Si lo es, lo añade a la nueva lista
    */
    if(numero % 2 == 0) onlyPares.add(numero);
  });
  /** Al finalizar, recorre la lista de pares para mostrarlos */
  stdout.write("Lista de pares: ");
  onlyPares.forEach((valor){ stdout.write("${valor} ");});
}