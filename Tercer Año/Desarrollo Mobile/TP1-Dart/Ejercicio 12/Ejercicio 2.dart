import 'Estudiante.dart';

/** Lista de estudiantes */
List<Estudiante> alumnos = [];

/** Obtener lista de alumnos con promedio mayor a 6 */
List<Estudiante> promediosAltos(List<Estudiante> listado){
  /** Nueva lista de alumnos */
  List<Estudiante> listaNueva = [];
  /** Recorre la lista y compara el promedio, 
   * si es mayor a 6, lo envia a la lista nueva
   */
  listado.forEach(
    (alumno){
      double promedioAlumno = alumno.calcularPromedio();
      if(promedioAlumno > 6) listaNueva.add(alumno);
    }
  );
  /** Devuelve la lista filtrada */
  return listaNueva;
}

/** Función principal */
void main(){
  /** Primero crea 5 estudiantes */
  crearListado();

  /** Luego obtiene la lista de los promedio */
  List<Estudiante> promediosSuperiores = promediosAltos(alumnos);

  // Escribe los nombres de los alumnos con promedios altos
  print("Los estudiantes con promedios altos son: ");
  /** Los muestra por pantalla */
  promediosSuperiores.forEach(
    (estudiante){
      double promedio = estudiante.calcularPromedio();
      print("${estudiante.nombre}, ${promedio}");
    }
  );
}

/** Recibe datos del alumno y retorna el objeto Estudiante */
Estudiante crearAlumno(String nombre, int edad, List<int> calificaciones){
  Estudiante alumno = new Estudiante();
  alumno.cargarDatos(nombre, edad);
  alumno.cargarMultiplesNotas(calificaciones);
  return alumno;
}

/** Crea multiples alumnos */
void crearListado(){
  Estudiante alumno1 = crearAlumno("Nacho", 23, [6,7,8,9]);
  alumnos.add(alumno1);
  Estudiante alumno2 = crearAlumno("Ezequiel", 20, [9,2,5,1]);
  alumnos.add(alumno2);
  Estudiante alumno3 = crearAlumno("Juan", 25, [4,5,1,3]);
  alumnos.add(alumno3);
  Estudiante alumno4 = crearAlumno("Ariel", 19, [8,8,9,4]);
  alumnos.add(alumno4);
  Estudiante alumno5 = crearAlumno("Pepe", 30, [6,7,5,4]);
  alumnos.add(alumno5);
}