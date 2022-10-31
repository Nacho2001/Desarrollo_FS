class Vehiculo{
    constructor(color, ruedas){
        this.color = color
        this.ruedas = ruedas
    }
    toString(){
        return `El vehículo de color : ${this.color} tiene ${this.ruedas} ruedas`
    }
}

class Coche extends Vehiculo{
    constructor(color,ruedas=4,velocidad, cilindradas){
        super(color,ruedas);
        this.velocidad = velocidad
        this.cilindradas = cilindradas
    }
    toString(){
        return super.toString()+`, Automóvil, con velocidad máxima ${this.velocidad} y un motor de ${this.cilindradas} cm3`
    }
}

class Bicicleta extends Vehiculo{
    constructor(color,ruedas=2,tipo){
        super(color,ruedas);
        this.tipo = tipo
    }
    toString(){
        return super.toString()+`, <br>Vehículo: Bicicleta, <br>Tipo: ${this.tipo}`
    }
}

class Camioneta extends Vehiculo{
    constructor(color,ruedas=4,carga){
        super(color,ruedas);
        this.carga = carga;
    }
    toString(){
        return super.toString()+`, <br> Vehículo: Camioneta, <br> Capacidad de carga: ${this.carga}`
    }
}

class Motocicleta extends Vehiculo{
    constructor(color,ruedas=2, velocidad, cilindradas){
        super(color,ruedas);
        this.velocidad = velocidad;
        this.cilindradas = cilindradas;
    }
    toString(){
        return super.toString()+`<br>Vehiculo: Motocicleta, <br>Velocidad máxima: ${this.velocidad}, <br>Motor de ${this.cilindradas} cm3 cilindradas`
    }
}


let auto = new Vehiculo('Verde','4',)