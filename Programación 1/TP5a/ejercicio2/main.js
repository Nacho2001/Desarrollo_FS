class Rectangulo{
    constructor(base_rec, altura_rec){
        this.base = base_rec;
        this.altura = altura_rec;
    };

    area(){
        return this.base * this.altura
    };

    perimetro(){
        return this.base*2+this.altura*2
    };

    datos_rectangulo(){
        return `Base del rectangulo: `+this.base+`<br>
        Altura del rectángulo: `+this.altura+`<br>
        Area: `+this.area()+`<br>
        Perímetro: `+this.perimetro()
    };
};
class Triangulo{
    constructor(base_tri,altura_tri,lado1,lado2,lado3){
        this.base = base_tri;
        this.altura = altura_tri;
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    };

    area(){
        return (this.base*this.altura)/2
    };

    perimetro(){
        return this.lado1+this.lado2+this.lado3
    };

    datos_triangulo(){
        return ` Datos triángulo: <br>
        Lado 1: `+this.lado1+` <br>
        Lado 2: `+this.lado2+` <br>
        Lado 3: `+this.lado3+` <br>
        Base: `+this.base+` <br>
        Altura: `+this.altura+` <br>
        Area: `+this.area()+` <br>
        Perímetro: `+this.perimetro()
    }
};
class Circulo{
    constructor(radio_cir){
        this.radio = radio_cir;
    };

    area(){
        return 3,14*Math.pow(this.radio,2)
    };

    perimetro(){
        return 2*3,14*this.radio
    };

    datos_circulo(){
        return `
        Datos circulo: <br>
        Radio: `+this.radio+` <br>
        Area: `+this.area()+` <br>
        Perímetro: `+this.perimetro()
    }
};

function rectangulo(){
    document.getElementById("formulario").innerHTML = `
    <label>Base: </label><br>
    <input id="base_rec" style="margin-bottom: 10px;"><br>
    <label>Altura: </label><br>
    <input id="altura_rec" style="margin-bottom: 10px;"><br>
    <button onclick="lectura_rectangulo()">Ingresar valores</button>`
};

function lectura_rectangulo(){
    let base_rec = parseFloat(document.getElementById("base_rec").value);
    let altura_rec = parseFloat(document.getElementById("altura_rec").value);
    let data = new Rectangulo(base_rec,altura_rec);
    document.getElementById("rta").innerHTML = data.datos_rectangulo();
};

function triangulo(){
    document.getElementById("formulario").innerHTML = `
    <label>Base: </label><br>
    <input id="base_tri" style="margin-bottom: 10px;"><br>
    <label>Altura: </label><br>
    <input id="altura_tri" style="margin-bottom: 10px;"><br>
    <label>Lado 1: </label><br>
    <input id="lado1" style="margin-bottom: 10px;"><br>
    <label>Lado 2: </label><br>
    <input id="lado2" style="margin-bottom: 10px;"><br>
    <label>Lado 3: </label><br>
    <input id="lado3" style="margin-bottom: 10px;"><br>
    <button onclick="lectura_triangulo()">Ingresar valores</button>`
};

function lectura_triangulo(){
    let base_tri = parseFloat(document.getElementById("base_tri").value);
    let altura_tri = parseFloat(document.getElementById("altura_tri").value);
    let lado1 = parseFloat(document.getElementById("lado1").value);
    let lado2 = parseFloat(document.getElementById("lado2").value);
    let lado3 = parseFloat(document.getElementById("lado3").value);
    let data = new Triangulo(base_tri,altura_tri,lado1,lado2,lado3);
    document.getElementById("rta").innerHTML = data.datos_triangulo();
};

function circulo(){
    document.getElementById("formulario").innerHTML = `
    <label>Radio del circulo:</label><br>
    <input id="radio_cir" style="margin-bottom: 10px"><br>
    <button onclick="lectura_circulo()">Ingresar valor</button>`
};

function lectura_circulo(){
    let radio_cir = parseFloat(document.getElementById("radio_cir").value);
    let data = new Circulo(radio_cir)
    document.getElementById("rta").innerHTML = data.datos_circulo();
}

function check_figura(){
    let figura = document.getElementById("figura").value;
    console.log(figura);
    if(figura == "rectangulo"){
        rectangulo();
    }else{
        if(figura == "triangulo"){
            triangulo();
        }else{
            circulo();
        }
    }
    
};

