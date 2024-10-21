/** Nuevo estudiante con nombre (string), edad (int) y calificaciones (array) */
class Estudiante {
  /* Datos estudiante */
  late String nombre;
  late int edad;
  List<int> calificaciones = [];

  /** Cargar nombre de estudiantes: nombre (string), edad (int) */
  void cargarDatos(nombreEst, edadEst){
    this.nombre = nombreEst;
    this.edad = edadEst;
    print("Alumno cargado: ${nombre}, edad: ${edad} años");
  }

  /** Importar calificación a la lista, recibe un int */
  void agregarCalificacion(nota){
    this.calificaciones.add(nota);
    print("Calificación añadida!");
  }

  /** Enviar todas las notas en una única lista */
  void cargarMultiplesNotas(List<int> notas){
    this.calificaciones = notas;
  }

  /** Ver calificaciones por terminal */
  void verCalificaciones(){
    this.calificaciones.forEach((nota){ print(nota);});
  }

  /** Calcular el promedio de calificaciones */
  double calcularPromedio(){
    /** Acumulador de notas */
    int total_notas = 0;
    /* Recorre la lista y suma las notas en el total_notas */
    this.calificaciones.forEach(
      (nota){ 
        total_notas = total_notas+nota;
      }
    );
    /** Obtiene el promedio con el total de notas */
    double promedio = total_notas/calificaciones.length;
    /** devuelve el resultado */
    return promedio;
  }

}