import 'dart:io';
import 'dart:math';

void main(){
  stdout.writeln("Insert the circle radius");
  // Insert circle radius
  double radius = double.parse(stdin.readLineSync()!);
  // call the calcArea function to calculate the area
  calcArea(radius);
}

calcArea(radius){
  num area = pi * pow(radius, 2);
  num truncArea = num.parse(area.toStringAsFixed(2));
  stdout.writeln("The circle´s area is ${truncArea}");
}