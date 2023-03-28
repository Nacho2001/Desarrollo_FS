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
    constructor(color,ruedas,velocidad, cilindradas){
        super(color,ruedas); // Toma las propiedades de la clase madre "Vehiculo", pero tambien debe definirlas en la clase hija
        this.ruedas = 4 // Ya queda definido que el coche tiene 4 ruedas
        this.velocidad = velocidad
        this.cilindradas = cilindradas
    }
    //Hereda el metodo toString de la clase Vahiculo
    toString(){ //Además, agrega información de la clase hija
        return super.toString()+`, Automóvil, con velocidad máxima ${this.velocidad} y un motor de ${this.cilindradas} cm3`
    }
}

class Bicicleta extends Vehiculo{
    constructor(color,ruedas=2,tipo){
        super(color, ruedas);
        this.tipo = tipo
    }
    toString(){
        return super.toString()+`, <br>Vehículo: Bicicleta, <br>Tipo: ${this.tipo}`
    }
}

class Camioneta extends Vehiculo{
    constructor(color, ruedas=4,carga){ // La variable ruedas trae un valor por defecto
        super(color,ruedas);
        this.carga = carga;
    }
    toString(){
        return super.toString()+`, <br> Vehículo: Camioneta, <br> Capacidad de carga: ${this.carga}`
    }
}

class Motocicleta extends Vehiculo{
    constructor(color, ruedas=2, velocidad, cilindradas){
        super(color,ruedas);
        this.velocidad = velocidad;
        this.cilindradas = cilindradas;
    }
    toString(){
        return super.toString()+`<br>Vehiculo: Motocicleta, <br>Velocidad máxima: ${this.velocidad}, <br>Motor de ${this.cilindradas} cm3 cilindradas`
    }
}

let vehiculos = []

function dos_ruedas(){
    let tipo = document.getElementById("tipo").value
    if(tipo == "bicicleta"){
        document.getElementById("adicional").innerHTML += `
        <label>Tipo de bicicleta</label><br>
        <select id="tipo_bici">
        <option selected>-- Seleccionar tipo --</option>
        <option value="urbana">Urbana</option>
        <option value="deportiva">Deportiva</option>
        </select>
        `
    }else{
        document.getElementById("adicional").innerHTML += `
        <label>Velocidad máxima (km/h)</label><br>
        <input id="velocidad" type="number" placeholder="Ej: 100 km/h"><br>
        <label>Cilindradas (cc)</label><br>
        <input id="cilindradas" type="number">`
    }
};
function cuatro_ruedas(){
    let tipo = document.getElementById("tipo").value
    if(tipo == "automovil"){
        document.getElementById("adicional").innerHTML += `
        <label>Velocidad máxima (km/h)</label><br>
        <input id="velocidad" type="number" placeholder="Ej: 100 km/h"><br>
        <label>Cilindradas (cc)</label><br>
        <input id="cilindradas" type="number">`
    }else{
        if(tipo == "motocicleta"){
            document.getElementById("adicional").innerHTML += `
            <label>Máxima capacidad de carga (kg)</label>
            <input id="carga" type="number">`
        }else{}
    }
};

function identificar_p_ruedas(){
    let ruedas = parseInt(document.getElementById("ruedas").value)
    let color = document.getElementById("color").value
    if (ruedas = 2){
        document.getElementById("adicional").innerHTML += `
        <label>Tipo de vehículo</label><br>
        <select id="tipo">
        <option selected>-- Seleccionar vehículo --</option>
        <option value="bicicleta">Bicicleta</option>
        <option value="motocicleta">Motocicleta</option>
        </select>`
        dos_ruedas()
    }else{
        if(ruedas = 4){
            document.getElementById("adicional").innerHTML += `
            <label>Tipo de vehículo</label><br>
            <select id="tipo">
            <option selected>-- Seleccionar vehículo --</option>
            <option value="automovil">Automovil</option>
            <option value="camioneta">Camioneta</option>
            </select>`
            document.getElementById("boton").innerHTML = `
            <input id="boton" type="button" class="btn-sm btn-primary" onclick="cuatro_ruedas()" value="Continuar">`
        }
    }
}
