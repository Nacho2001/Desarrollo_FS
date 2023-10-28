import { Card } from 'primereact/card';
import {useState} from 'react';

const TarjetaPokemon = (props) => {
    const pokemonData = props.pokemon
    const link = `https://www.wikidex.net/wiki/${pokemonData.name}`
    const imagen= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`
    let types = pokemonData.types
    let tiposElementales = ""
    types.forEach(type => {
        if (types.lenght == 0){
            tiposElementales = tiposElementales + type.type.name
        } else {
            tiposElementales = tiposElementales + ` / ${type.type.name}`
        }
    })
    console.log(tiposElementales)
    function tipos(){
        types.forEach(type => {
            
             // Recorrer arreglo types y guardar los tipos en tipoElemental
        });
        console.log(types)
    }
    
    /*if (props.visible){
        return (
            <Card>
                <div className="flex flex-column md:flex-row lg:flex-row xl:flex-row">
                    <img alt="" src={imagen} width="260" height="260"/>
                    <div className="">
                        <div><b>Name</b>: {pokemonData.name}</div>
                        <div><b>Height</b>: {pokemonData.height/10} M</div>
                        <div><b>Weight</b>: {pokemonData.weight/10} Kg</div>
                        <div><b>Type</b>:{pokemonData.description}</div>
                        <div><b>Reference Link</b>: <a href={link}>{pokemonData.name}</a></div>
                    </div>
                </div>
            </Card>
        )
    }*/
}

export default TarjetaPokemon;