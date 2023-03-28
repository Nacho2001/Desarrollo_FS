import Alumno from "./main.js"; // Importa la clase del main.js
let alumno1 = new Alumno("Nacho","Migoni",2001,43285976,"Chimpay 3448")
document.write(alumno1.nombre)
document.write(alumno1.datos())

// Definicion de objetos 2: Pasar el objeto en formato JSON, con este metodo no es necesario un constructor
alumno2={
    nombre:"alumno2",
    apellido: "Show"
}

