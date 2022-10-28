class Vehiculo{
    constructor(color, ruedas){
        this.color = color
        this.ruedas = ruedas
    }
    toString(){
        // Concatenación de cadena de caracteres
        //return 'El vehículo de color: '+this.color +'tiene '+this.ruedas+ 'ruedas'
        // Template string
        return `El vehículo de color : ${this.color} tiene ${this.ruedas} ruedas`
    }
}

class Coche extends Vehiculo{
    constructor(velocidad, cilindradas){
        super(); // Toma las propiedades de la clase madre "Vehiculo"
        this.ruedas = 4 // Ya queda definido que el coche tiene 4 ruedas
        this.velocidad = velocidad
        this.cilindradas = cilindradas
    }
    //Hereda el metodo toString de la clase Vahiculo
    toString(){ //Además, agrega información de la clase hija
        return super()+`, Automóvil, con velocidad máxima ${this.velocidad} y un motor de ${this.cilindradas} cm3`
    }
}

class Bicicleta extends Vehiculo{
    constructor(tipo){
        super();
        this.tipo = tipo
    }
    toString(){
        return super()+`, <br>Vehículo: Bicicleta, <br>Tipo: ${this.tipo}`
    }
}

class Camioneta extends Vehiculo{
    constructor(carga){
        super();
        this.carga = carga;
    }
    toString(){
        return super()+`, <br> Vehículo: Camioneta, <br> Capacidad de carga: ${this.carga}`
    }
}

class Motocicleta extends Vehiculo{
    constructor(velocidad, cilindradas){
        super();
        this.velocidad = velocidad;
        this.cilindradas = cilindradas;
    }
    toString(){
        return super()+`<br>Vehiculo: Motocicleta, <br>Velocidad máxima: ${this.velocidad}, <br>Motor de ${this.cilindradas} cm3 cilindradas`
    }
}

let vehiculos = []
let campo = document.getElementById("adicional").innerHTML
let tipo = document.getElementById("tipo").value

function dos_ruedas(){
    if(tipo == "bicicleta"){
        campo += `
        <label>Tipo de bicicleta</label><br>
        <select id="tipo_bici">
        <option selected>-- Seleccionar tipo --</option>
        <option value="urbana">Urbana</option>
        <option value="deportiva">Deportiva</option>
        </select>
        `
    }else{
        campo += `
        <label>Velocidad máxima (km/h)</label><br>
        <input id="velocidad" type="number" placeholder="Ej: 100 km/h"><br>
        <label>Cilindradas (cc)</label><br>
        <input id="cilindradas" type="number">`
    }
};
function cuatro_ruedas(){
    if(tipo == "automovil"){
        campo += `
        <label>Velocidad máxima (km/h)</label><br>
        <input id="velocidad" type="number" placeholder="Ej: 100 km/h"><br>
        <label>Cilindradas (cc)</label><br>
        <input id="cilindradas" type="number">`
    }else{
        campo += `
        <label>Máxima capacidad de carga (kg)</label>
        <input id="carga" type="number">`
    }
};

function identificar_p_ruedas(){
    let ruedas = document.getElementById("ruedas").value
    if (ruedas = 2){
        campo = `
        <label>Tipo de vehículo</label><br>
        <select id="tipo">
        <option selected>-- Seleccionar vehículo --</option>
        <option value="bicicleta">Bicicleta</option>
        <option value="motocicleta">Motocicleta</option>
        </select>`
        dos_ruedas()
    }else{
        if(ruedas = 4){
            campo = `
            <label>Tipo de vehículo</label><br>
            <select id="tipo">
            <option selected>-- Seleccionar vehículo --</option>
            <option value="automovil">Automovil</option>
            <option value="camioneta">Camioneta</option>
            </select>`
            cuatro_ruedas()
        }
    }
}
