let arrayNota = []
let aprobados = 0
let desaprobados = 0
let campoRta = document.getElementById("rta").innerHTML

function take(){
    let nota = parseFloat(document.getElementById("nota").value)
    campoRta += nota+"<br>"
    if(nota >= 7){
        aprobados++
    }if(nota < 7){
        desaprobados++
    }if(nota < 0 || nota > 10){
        campoRta += "<br>Error: El nro "+nota+" se encuentra fuera de rango"
    }else{
        arrayNota.push(nota);
    }
}

function calc(){
    let suma = 0
    let cont = 0
    for (let i = 0; i < arrayNota.length; i++) {
        let note = arrayNota[i];
        suma = suma+note
        cont = cont+1
    }
    let promedio = suma/cont
    campoRta += `<br>El promedio de notas es: `+ promedio+`<br>
    Alumnos aprobados: `+aprobados+`<br>
    Alumnos desaprobados: `+desaprobados
}