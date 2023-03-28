function suma() {
  let numero1 = parseInt(document.getElementById("num1").value);
  let numero2 = parseInt(document.getElementById("num2").value);
  document.getElementById("resultado").innerHTML = numero1+numero2
}
function resta(){
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = numero1-numero2
}
function multiplicacion(){
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = numero1*numero2
}
function division(){
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    if(numero2 == 0){
        alert("no se puede hacer la operacion")
    }else{
        document.getElementById("resultado").innerHTML = numero1/numero2
    }
}
