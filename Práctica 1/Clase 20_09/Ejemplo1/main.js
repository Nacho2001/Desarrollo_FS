let padre= document.getElementById("demo") // Estrae un elemento del html
let hijo= document.createElement("p") // Crea un elemento nuevo con una etiqueta <p></p>
hijo.textContent="Hola Mundo" // En el <p> de hijo, le introduce "Hola mundo"
hijo.className="text-primary" // Le aplica la clase que le da el color azul. Resultado: <p class="text-primary">
padre.appendChild(hijo) // Agrega el elemento hijo al padre
