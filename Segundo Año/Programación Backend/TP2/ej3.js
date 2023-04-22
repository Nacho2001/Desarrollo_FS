class CuentaBancaria{
    constructor(numero, saldo){
        this.numero = numero
        this.saldo = saldo
    }
    crearCuenta(){
        let cuenta = {numero: this.numero, saldo: this.saldo}
        console.log("Nueva cuenta creada")
        return cuenta;
    }
}

class Cliente{
    constructor(nombre, apellido, dni, cuenta){
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.cuenta = cuenta
    }
    deposito(monto){
        this.cuenta.saldo = this.cuenta.saldo+monto
        console.log("Se depositaron $"+monto);
    }
    mostrarCliente(){
        console.log("Cliente: "+this.nombre+" "+this.apellido+", "+
        "DNI: "+this.dni+", "+
        "Cuenta: "+this.cuenta.numero+", "+
        "Saldo: $"+ this.cuenta.saldo)
    }
}

c1 = new CuentaBancaria(7753,45000).crearCuenta();
cliente = new Cliente("pepe", "argento", 11223344, c1);
cliente.deposito(8323);
cliente.mostrarCliente();