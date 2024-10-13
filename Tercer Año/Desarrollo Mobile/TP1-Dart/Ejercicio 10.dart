import 'dart:io';

/** Agenda de contactos (Map) */
Map<String, int> agenda = {};

/** Activador del bucle */
bool activador = true;
/** Función principal */
void main(){
  while (activador) {
    print('''
      Menú agenda:
        1- Ver lista de contactos
        2- Agregar contacto
        3- Buscar contacto
        4- Eliminar contacto
        5- Salir
    ''');
    int rta = int.parse(stdin.readLineSync()!);
    switch (rta) {
      case 1:
        
        break;
      default:
    }
  }
}

/** Mostrar lista de contactos */
void verListaContactos(){
  for (var i = 0; i < agenda.length; i++) {
    
  }
}

/** Agregar contacto */
void aniadirContacto(){

}

/** Borrar contacto */
void borrarContacto(){

}

/** Buscar contacto */
void buscarContacto(){

}