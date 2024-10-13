// Detect pair numbers

import 'dart:io';

void main(){
  // The user insert a number
  stdout.writeln("Insert a number:");
  // Convert the input into int type
  int number = int.parse(stdin.readLineSync()!);
  // The user´s number is sent to a function
  String output = isPair(number);
  print(output);
}

isPair(userNumber){
  // Check if received number is pair or odd
  if (userNumber % 2 == 0) {
    // Change output text depending of result
    return "$userNumber is a pair number (Es par)";
  } else {
    return "$userNumber is an odd number (Es impar)";
  }
}