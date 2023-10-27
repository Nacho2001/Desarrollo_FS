import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import TarjetaPokemon from '../componentes/tarjetaPokemon';
import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';
import axios from 'axios';

const DexApp = () => {
    const [pokemon,setPokemmon] = useState("");
    const [visible, setVisible] = useState(false);
    const [pokemonData,setPokemonData] = useState([])
    function obtenerPokemon(event){
        event.preventDefault()
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((resp) => {
        setVisible(true)
        setPokemonData(resp.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    return (
        <div className='ml-7'>
            <h4>Busca un Pokémon</h4>
                <form action onSubmit={obtenerPokemon}>
                    <div className="flex flex-column md:flex-row lg:flex-row xl:flex-row">
                        <div>
                            <span className="p-input-icon-left">
                                <i className="pi pi-search"/>
                                <InputText value={pokemon} onChange={(event => setPokemmon(event.target.value))}/>
                            </span>
                        </div>
                        <Button label="Consultar" severity="primary" 
                        className="w-5 mt-3 md:mt-0 lg:mt-0 xl:mt-0 ml-0 md:ml-3 lg:ml-3 xl:ml-3"/> 
                    </div>
                </form>
            <div className="mt-5" >
                <TarjetaPokemon visible={visible} pokemon={pokemonData}/>    
            </div>
        </div>
    )
}
export default DexApp;