class Cilindro{
    constructor(radio_cin, altura_cin){
        this.radio = radio_cin;
        this.altura = altura_cin;
    };

    area(){
        return 2*3.14*altura+2*3.14*Math.pow(radio,2)
    };

    perimetro(){
        return Math.pow(radio,2)*3.14*altura
    };

    datos_cilindro(){
        document.getElementById("rta").innerHTML = `
        <h2>Informe de cilindro:<h2><br>
        Radio: ${radio},<br>
        Altura: ${altura},<br>
        Area: `+this.area+`,<br>
        Perímetro: `+this.perimetro
    }
};
class Cubo{
    constructor(arista_cubo){
        this.arista = arista_cubo
    };

    area(){
        return (Math.pow(arista,2))*6
    };

    perimetro(){
        return 12*arista
    };

    datos_cubo(){
        return `<h2>Informe de cubo</h2><br>
        Arista: ${arista}, <br>
        Area: `+this.area+`, <br>
        Perímetro: `+this.perimetro
    }
};
class Esfera{
    constructor(radio_es){
        this.radio = radio_es
    };

    area(){
        return 4*3.14*math.pow(radio,2)
    };
    perimetro(){
        return 2*3.14*radio
    };

    datos_esfera(){
        return `<h2>Informe de la esfera<h2><br>
        Radio: ${radio},<br>
        Area: `+this.area+`,<br>
        Perímetro: `+this.perimetro
    }
}

function cilindro(){
    document.getElementById("campo").innerHTML = `
    <label>Altura:</label><br>
    <input id="altura_cin" style="margin-bottom: 10px><br>
    <label>Radio:</label><br>
    <input id="radio_cin"style="margin-bottom: 10px><br>
    <button onclick="cilindro2()">Calcular</button>`
};

function cilindro2(){
    let altura_cin = parseFloat(document.getElementById("altura_cin").value);
    let radio_cin = parseFloat(document.getElementById("radio_cin").value);
    let datos = new Cilindro(altura_cin, radio_cin);
    document.getElementById("rta").innerHTML = datos.datos_cilindro
};

function cubo(){
    document.getElementById("campo").innerHTML = `
    <label>Aristas: </label><br>
    <input id="arista_cubo" style="margin-bottom: 10px><br>
    <button onclick="cubo2()">Calcular</button>`
};

function cubo2(){
    let arista_cubo = parseFloat(document.getElementById("arista_cubo").value);
    let datos = new Cubo(arista_cubo)
    document.getElementById("rta").innerHTML = datos.datos_cubo
};

function esfera(){
    document.getElementById("campo").innerHTML = `
    <label>Radio: </label><br>
    <input id="radio_cin" style="margin-bottom: 10px"><br>
    <button onclick="esfera2()">Calcular</button>`
};

function esfera2(){
    let radio_cin = parseFloat(document.getElementById("radio_cin").value);
    let datos = new Esfera(radio_cin);
    document.getElementById = datos.datos_esfera
}

function registro_figura(){
    let figura = document.getElementById("figura").value
    if (figura == "cilindro") {
        cilindro()
    } else {
        if (figura == "cubo") {
            cubo()
        } else {
            esfera()
        }
    }
}

