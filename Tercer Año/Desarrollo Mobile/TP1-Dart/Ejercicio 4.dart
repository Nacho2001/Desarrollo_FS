
import 'dart:io';
void main(){
  // insert a number
  stdout.writeln("Insert a number");
  // take user´s number
  int number = int.parse(stdin.readLineSync()!);
  // call to the addition function
  addition(number);
}

addition(number){
  int full = 0;
  for (int i = number; i > 0; i--){
    // debug flag
    stdout.writeln("${full} + ${i} = ${full+i}");
    full = full+i;
  }
  // final result
  stdout.writeln("The result is ${full}");
}