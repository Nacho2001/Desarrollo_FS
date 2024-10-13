import 'dart:io';

void main(){
  // Mensaje por pantalla
  print("Ingresa una palabra o una frase");
  // Toma el string escrito por el usuario
  var stg = stdin.readLineSync();
  bool output = findPalindrome(stg);
  // Muestra el resultado de la función
  print(output);
}

/** Recibe un string y averigua si es un palindromo*/
findPalindrome(stg){
  // Voltea el string para realizar la comparación
  String reverseStg = stg.split('').reversed.join();
  /* 
    Por defecto, el string se considera un palíndromo 
    pero, este valor puede cambiar en el bucle
  */
  bool isPalindrome = true;
  /* Utiliza un bucle para recorrer ambos strings */  
  for (var i = 0; i < stg.length; i++){
    /* 
      Si el valor en la posición inversa no coincide, 
      isPalindrome será false y el string ya no será un palíndromo 
    */
    if (stg[i] != reverseStg[i]) {
      isPalindrome = false;
    }
  }
  // Retorna el valor de isPalindrome
  return isPalindrome;
}