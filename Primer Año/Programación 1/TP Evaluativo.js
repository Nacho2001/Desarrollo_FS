function nombre(){
    let nombre = document.getElementById("name").value
    document.getElementById("nombre").innerHTML = nombre
}
function carga_producto(){
    confirmacion = confirm("Cargar producto?")
    subtotal = parseFloat(document.getElementById("subtotal").innerHTML);
    let producto = document.getElementById("articulo").value
    let costoIn = parseFloat(document.getElementById("precioIn").value);
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let precio = costoIn*cantidad
    subtotal = subtotal+precio
    document.getElementById("subtotal").innerHTML = subtotal
    document.getElementById("resumen_compras").innerHTML +=
    `$${precio} (${cantidad}) ${producto}<br>`
}

function fin_compra(){
    confirmacion2 = confirm("Finalizar registro de compra?")
    if (confirmacion2) {
        subtotal = parseFloat(document.getElementById("subtotal").innerHTML)
        let iva = parseFloat((subtotal*0.21).toFixed(2))
        pago = confirm("Va a pagar con tarjeta?")
        if (pago) {
            let interes = parseFloat((subtotal*0.20).toFixed(2))
            let total = subtotal+iva+interes
            document.getElementById("total").innerHTML =
            `------------ <br>
            Interes = $${interes} <br>
            Iva (21%) = $${iva} <br>
            ------------- <br>
            Total = $${total}`
        } else {
            let total = subtotal+iva
            document.getElementById("total").innerHTML =           
            `------------ <br>
            Iva (21%) = $${iva} <br>
            ------------- <br>
            Total = $${total}`
        }
    }
}

