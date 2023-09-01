import { Fragment } from "react";

const nombre = "Pepe Argento"; /* Si se define la variable dentro del compoenente, 
    siempre va a estar reservando espacio para esa variable cada vez que se renderice y esto no es eficiente, 
    por eso es mejor definirla fuera del componente y solo la define una vez. */

const miNombre = { nombre: "Nacho", apellido:"Migoni" };
/* Un objeto json no lo puede renderizar porque no lo reconoce, por eso se utiliza JSON.stringfy(objeto)
para convertirlo en un array, que si lo puede reconocer
*/
const getSuma = (a, b) => {
    return (a+b)
}
// Siempre los componentes empiezan con mayusculas
export const App = (props) => {
    return (
    <Fragment> {/*Fragment es lo mismo que tener un elemento vacio <></>*/}
        <h1>Que miras bobo?</h1>
        <p>Racing perdió {nombre}</p>
        <p>El más grande es River, {miNombre.nombre} no lo olvides!!</p>
        <p>La suma de los nros es: {getSuma(4,2)}</p>
        <p>nota del main: {props.nota}</p>
    </Fragment>
    )
}