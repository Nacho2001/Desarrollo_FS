// Import dart:io for text entry
import 'dart:io';

void main(){
  // Output with stdout
  stdout.writeln("Insert first number: ");
  // Inserting data with stdin and parsing to double
  double number1 = double.parse(stdin.readLineSync()!);
  stdout.writeln("Insert second number: ");
  double number2 = double.parse(stdin.readLineSync()!);
  double result;
  
  // Operations
  // Addition (suma)
  result = number1 + number2;
  print("$number1 + $number2 = $result");
  
  // Substraction (resta)
  result = number1 - number2;
  print("$number1 - $number2 = $result");

  // Multiplication
  result = number1 * number2;
  print("$number1 * $number2 = $result");

  // Division
  result = number1 / number2;
  print("$number1 / $number2 = $result");
}