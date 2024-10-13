import 'dart:io';

/**Funcion pricipal */

void main(){
  /*print('Hello world!!');*/
  saludin();
  /** Llama a función recursiva */
  cat(5);
}

/** Presenta función recursiva */
void saludin(){
  stdout.writeln("Ejemplo de función recursiva: ");
}

/**  Se ingresa un valor y retorna una cuenta desde 1*/
int cat(int valor){
  if (valor == 0) {
    return valor;
  } else {
    cat(valor);
    print(valor);
    return valor;
  }
}