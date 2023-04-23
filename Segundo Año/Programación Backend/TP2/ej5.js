class Persona{
    constructor(nombre,apellido,dni){
        this.nombre = nombre,
        this.apellido = apellido,
        this.dni = dni
    }
}

class Empleado extends Persona{
    constructor(nombre,apellido,dni,horasTrabajadas,salarioXhora){
        super(nombre,apellido,dni)
        this.horasTrabajadas = horasTrabajadas,
        this.salarioXhora = salarioXhora
        this.salarioSemanal = 0
    }
    calculoSalario(){
        this.salarioSemanal = this.salarioXhora*this.horasTrabajadas
    }
    mostrarEmpleado(){
        console.log("Empleado: "+this.nombre+" "+this.apellido+", dni: "+this.dni+", salario semanal: "+this.salarioSemanal)
    }
}

pepe = new Empleado("pepe", "argento", 11223344, 20, 1050)
pepe.calculoSalario()
pepe.mostrarEmpleado();
