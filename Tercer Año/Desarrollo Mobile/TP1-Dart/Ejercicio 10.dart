import 'dart:io';

/** Agenda de contactos (Map) */
Map<String, int> agenda = {};

/** Activador del bucle (menú de opciones) */
bool activador = true;

/** Función principal */
void main(){
  /** Mientras se encuentre el activador en true, se muestra el menú de opciones */
  while (activador) {
    print('''
      Menú agenda:
        1- Ver lista de contactos
        2- Agregar contacto
        3- Buscar contacto
        4- Eliminar contacto
        5- Salir
    ''');
    /** rta toma la respuesta del usuario */
    int rta = int.parse(stdin.readLineSync()!);
    /** Evalua la respuesta con la lista de opciones */
    switch (rta) {
      case 1:
        /** Si se ingresó 1, se muestra la agenda completa */
        verListaContactos();
        break;
      case 2:
        /** Si rta es 2, se agrega un contacto nuevo */
        aniadirContacto();
        break;
      case 3:
        /** Si la respuesta es 3, se busca un contacto por nombre */
        buscarContacto();
        break;
      case 4:
        /** Si rta es 4, se ingresa el nombre de un contacto y se borra */
        borrarContacto();
        break;
      default:
        /** Cualquier otra opción, cambia a false el activador 
         * y el programa termina*/
        activador = false;
    }
  }
}

/** Mostrar lista de contactos */
void verListaContactos(){
  print("Contactos:");
  /** Recorre la coleccion agenda para mostrar cada clave (contacto) 
   * y los valores (numeros)
  */
  agenda.forEach((contacto, numero) {
    print("${contacto}: ${numero}");
  });
}

/** Agregar contacto nuevo*/
void aniadirContacto(){
  stdout.write("Nombre de contacto: ");
  // Obtiene el nombre del contacto del usuario
  /** En la agenda, no estan permitidos los valores nulos,
   * por lo tanto utilizo ?? "" en readLinesync
   * para que estos no se carguen. En su lugar, 
   * se utilizará el string por defecto: "Sin_nombre" 
   */
  String nombre = stdin.readLineSync() ?? "Sin_nombre";
  stdout.write("Numero de teléfono: ");
  // Obtiene el numero del contacto, conviritiendolo en un entero
  int numero = int.parse(stdin.readLineSync()!);
  // Luego, toma ambos valores y los incorpora al map
  agenda[nombre] = numero;
  print("Contacto añadido!");
}

/** Borrar contacto por nombre */
void borrarContacto(){
  stdout.write("Nombre del contacto a eliminar: ");
  /** El usuario ingresa el nombre del contacto (clave),
   * si no se ingresó nada, se toma un string vacio 
   * en su lugar
  */
  String nombre = stdin.readLineSync() ?? "";
  /** Con el método remove, toma el nombre como clave
   * para eliminar el par de la colección
   */
  agenda.remove(nombre);
  print("Contacto eliminado!");
}

/** Buscar contacto por nombre*/
void buscarContacto(){
  stdout.write("Ingresa nombre de contacto: ");
  /** Toma el nombre de contacto ingresado */
  String contacto = stdin.readLineSync() ?? "";
  // Contador de coincidencias
  int c = 0;
  /** Recorre la agenda buscando coincidencias */
  for (var nombre in agenda.keys){
    /** Si encuentra valores coincidentes, los mostrará por pantalla
     * y aumenta en 1 el contador de coincidencias
     */
    if(nombre == contacto){
      print("Nombre: ${nombre}, Teléfono: ${agenda[nombre]}");
      c = c+1;
    }
  }
  /** Mensajes al usuario de acuerdo al los resultados de la busqueda */
  if(c == 0){
    print("No se ha encontrado el contacto ingresado");
  } else {
    print("Se han encontrado ${c} coincidencias");
  }
}