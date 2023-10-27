import { Card } from 'primereact/card';

const TarjetaPokemon = (props) => {
    const pokemonData = props.pokemon
    const imagen= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`
    if (props.visible){
        return (
            <Card>
                <div className="flex flex-column md:flex-row lg:flex-row xl:flex-row w-11">
                    <img src={imagen} width="260" height="260"/>
                    <div className="">
                        <div><b>Nombre</b>: {pokemonData.name}</div>
                        <div><b>Altura</b>: {pokemonData.height}</div>
                        <div><b>Peso</b>: {pokemonData.width}</div>
                        <div><b>Descripción</b>:{pokemonData.description}</div>
                    </div>
                </div>
            </Card>
        )
    } else {
        <div></div>
    }
}

export default TarjetaPokemon;