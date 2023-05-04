import Navbar from '../componentes/navbar';
import Footer from '../componentes/footer';
import Sidenav from '../componentes/sidenav';
import React from "react";

function About(){
    return (
        <>
        <div>
            <Navbar/>
            <Sidenav/>
            <div style={{"margin":"1% 0 0 1%", "width":"75%"}}>
                <h3>Información de la página</h3>
                <div style={{"margin-left":"3%"}}>
                    <li style={{"font-weight":"bold"}}>Qué es este sitio?</li>
                    "SubGaming" es una plataforma que contiene un catálogo de productos gamers de determinadas tiendas. 
                    Su objetivo es ayudar al usuario a encontrar un producto determinado entre las tiendas asociadas, sin necesidad de 
                    recorrerlas una por una. 
                    <li style={{"font-weight":"bold"}}>Contenido de la página</li>
                    Inicio: Es donde se realiza una vista rápida de productos que se ofrecen en SubGaming.<br/>
                    Acerca de: Es la página donde se encuentra actualmente, ofrece información sobre el sitio.<br/>
                    Productos: Se muestra el contenido que ofrecen las tiendas y es donde se selecciona un producto deseado<br/>
                    Contacto: Es donde aparece un formulario para enviar un mensaje o consulta al autor de SubGaming
                    <li style={{"font-weight":"bold"}}>Productos de qué tiendas se ven en SubGaming?</li>
                    Las tiendas incluidas en esta página son las que se muestran en el panel a la derecha y solamente sucursales de 
                    ciertas localidades hasta una próxima expansión.
                    <li style={{"font-weight":"bold"}}>Como se compra un producto desde SubGaming?</li>
                    Para realizar una compra, primero se busca el producto deseado en la sección "Productos", una vez encontrado,
                    hacer clic en "Ir a la tienda", donde se redirigirá a la tienda que lo ofrece y se realiza el proceso de compra.
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default About;