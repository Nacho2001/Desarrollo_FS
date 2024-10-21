import './Estudiante.dart';

/** Función principal */
void main(){
  /** Crea nuevo estudiante */
  Estudiante alumno = new Estudiante();
  /** Carga datos del estudiante */
  alumno.cargarDatos("Nacho", 23);

  // Carga algunas calificaciones
  alumno.agregarCalificacion(6);
  alumno.agregarCalificacion(7);
  alumno.agregarCalificacion(8);
  alumno.agregarCalificacion(9);

  // Muestra por pantalla
  alumno.verCalificaciones();

  // Calcula y recibe el promedio
  double promedio = alumno.calcularPromedio();

  // Muestra el promedio calculado
  print("Promedio general: ${promedio}");
}