/** Crea nueva persona con el nombre y la edad */
class Persona{
  /** Variable tardía nombre (String)*/
  late String nombre;
  /** Variable tardía edad (int) */
  late int edad;

/** Recibe los datos del objeto y los fija en los atributos */
  void setData(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
  }

/** Revela por consola los datos de la persona */
  void mostrarDatos(){
    print("Nombre: ${nombre}; Edad: ${edad}");
  }
}

/** Función principal */
void main(){
  /** Crea nueva persona */
  Persona miPersona = new Persona();
  /** Envia los datos para el objeto */
  miPersona.setData('Nacho', 23);
  /** Invoca al metodo para ver los datos por terminal */
  miPersona.mostrarDatos();
}