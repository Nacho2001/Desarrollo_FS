/** Buscar nros pares del 1 al 100 */
/** función principal */
void main(){
  bp(100);
}

bp(int number){
  if (number == 1) {
    return 1;
  } else {
    if (number % 2 == 0) {
      print(number);
    }
    bp(number-1);
    return number;
  }
}
/** Challenge de proxima clase */
/** ordenar un array de numeros de menor a mayor de manera recursiva */