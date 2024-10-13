import 'dart:io';

/** Lista de tareas */
List<Tarea> tareas = [];

/** Activador de función */
bool active = true;

/** Nro de tarea */
int nro = 1;

/** Objeto tareas */
class Tarea{
  late String nombre_tarea;
  bool completada = false;
  late int nro;

  /** Establecer tarea */
  void set tarea(tarea){
    this.nombre_tarea = tarea;
  }

  /** Establecer estado de la misma */
  void set status(status){
  this.completada = status;
  }

  /** Establecer nro de tarea */
  void set nroTarea(nro){
    this.nro = nro;
  }

  /** Obtener nro de tarea */
  void get nroTarea {
    return this.nroTarea;
  }

  /** Añadir tarea */
  void nuevaTarea(nombreTarea, numTarea){
    tarea = nombreTarea;
    nroTarea = numTarea;
  }

  /** Marcar tarea como completada */
  void marcar(){
    completada = true;
  }
}
/** Función principal */
void main(){
  /* Se invoca la función con el menu de opciones */
  manipulacionTareas();
}

/** Muestra un menú de opciones y permite al usuario crear y marcar tareas */
void manipulacionTareas(){
  /* Al trarse de una función recursiva cuanta con un activador,
  el cual se desactiva al pulsar una opción fuera de rango 1-3 */
  if (active == true) {
    /** Muestra menú de opciones  */
    stdout.writeln('''
      Menú de opciones: 
        1- Ver lista de tareas
        2- Insertar tarea nueva 
        3- Marcar tarea completada 
        4- Salir''');
    /** Obtiene la respuesta del usuario */
    int seleccion = int.parse(stdin.readLineSync()!);
    /** Ejecuta determinada función de acuerdo a la elección del usuario y luego vuelve a este menú */
    switch (seleccion) {
      
      /** Opción 1: Ver lista de tareas */
      case 1:
        verListaTareas();
        manipulacionTareas();
        break;
      
      /** Opcion 2: Añadir tarea nueva */
      case 2:
        aniadirTarea();
        manipulacionTareas();
        break;

      /** Opción 3: Marcar tarea como completada */
      case 3:
        marcarTarea();
        manipulacionTareas();
        break;
      /** Opción 4 u otra fuera de ramgo, desactiva la función de menú, finalizando el programa */
      default:
        active = false;
        break;
    }
  }
}

/** Incorpora nueva tarea a la lista */
void aniadirTarea(){
  // Primero, solicita el nombre de tarea
  print("Nombre de tarea:");
  var nombre_tarea = stdin.readLineSync();
  // Luego, crea el objeto tarea
  Tarea task = new Tarea();
  // A este objeto, le pasa el nombre y el nro o id al método correspondiente
  task.nuevaTarea(nombre_tarea, nro);
  // Creado el objeto, lo suma a la lista de tareas
  tareas.add(task);
  // Incrementa en 1 el contador, porque será el número de la siguiente tarea
  nro = nro+1;
  // Muestra mensaje de tarea añadida
  print("Tarea añadida!");
}

/** Muestra lista de tareas */
void verListaTareas(){
  /** Recorre la lista con un bucle */
  for (var i = 0; i < tareas.length; i++) {
    /** Para facilitar la escritura de los atributos, se declara una variable con una tarea de la lista */
    Tarea task = tareas[i];
    /** Para cada tarea, se muestra una linea con el contenido del objeto */
    print('''
      Tarea nro: ${task.nro},
      Actividad: ${task.nombre_tarea}, 
      Completado: ${task.completada}''');
  }
}

/** Marcar tarea como finalizada */
void marcarTarea(){
  /** Muestra texto por terminal */
  stdout.writeln("Ingrese el nro de tarea a marcar:");
  /** Recibe el nro de tarea ingresado por el usuario */
  int numIngresado = int.parse(stdin.readLineSync()!);
  /** Recorre la lista de tareas hasta encontrar la tarea solicitada */
  for (var i = 0; i < tareas.length; i++) {
    Tarea task = tareas[i];
    if (task.nro == numIngresado) {
      /** Si el nro de tarea ingresado coincide con una tarea existente, 
       * se ejecutará el método que actualiza su estado y se notificará 
       * al usuario. Si no se encuentra, no se realiza ningún cambio.
       */
      task.marcar();
      print("Tarea n°${numIngresado} completada");
    }
  }
}