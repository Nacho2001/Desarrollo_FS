/** Objeto cuenta bancaria */
class CuentaBancaria{
  /** Titular de la cuenta */
  late String titular;
  /** Saldo disponible */
  int saldo = 0;

  /** Establece nombre del titular */
  void set titular_cuenta(titular){
    this.titular = titular;
  }

  /** Establece monto disponible */
  void set saldo_cuenta(saldo){
    this.saldo = saldo;
  }

  /** Obtiene saldo disponible */
  int get saldo_cuenta{
    return this.saldo;
  }

  /** Crear cuenta, establece datos iniciales */
  void crear_cuenta(titular, saldo){
    titular_cuenta = titular;
    saldo_cuenta = saldo;
  }
  
  /** Depositar dinero */
  void ingresar_dinero(monto){
    /** Actualiza el monto actual sumando lo ingresado */
    saldo_cuenta = saldo_cuenta + monto;
    print("El monto actualizado de la cuenta es: ${saldo_cuenta}");
  }

  /** Extraer dinero */
  void extraer_dinero(monto){
    /** Si se piensa extraer un monto mayor al saldo disponible, se monstrará un error */
    if (monto >= saldo_cuenta) {
      print("Error: La cuenta no dispone de tanto dinero para retirar. Ingrese un monto menor");
    } else {
      /** Si el monto es menor al saldo diponible, realiza la extracción */
      saldo_cuenta = saldo_cuenta - monto;
      print("Se ha retirado ${monto}. El saldo actual es de ${saldo_cuenta}");
    }
  }

  /** Ver monto disponible */
  void ver_saldo(){
    print("El saldo disponible es de ${saldo_cuenta}");
  }
}

/** Función principal */
void main(){
  /** Crea el objeto cuenta bancaria */
  CuentaBancaria miCuenta = new CuentaBancaria();
  /** Se ingresa el nombre del titular y el monto inicial */
  miCuenta.crear_cuenta("Nacho", 50000);
  /** Se extrae 49.000 */
  miCuenta.extraer_dinero(49000);
  /** Ver monto disponible */
  miCuenta.ver_saldo();
}