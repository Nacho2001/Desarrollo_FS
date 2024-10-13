/** Función principal */
void main(){
  Factorial(4);
}

int Factorial(int num){
  if (num == 1) {
    return 1;
  } else {
    num = num * Factorial(num - 1);
    print(num);
    return num;
  } 
}