/** Trae el array de numeros */
import '../numsArray.dart';

/** Valor suma de numeros */
int total = 0;

/** Función principal */
void main(){
  /** Recorre el array y a cada valor lo suma al total */
  numbers.forEach((number){
    total = total + number;
  });
  /** Al finalizar, muestra el total */
  print("La suma de los valores es: ${total}");
}