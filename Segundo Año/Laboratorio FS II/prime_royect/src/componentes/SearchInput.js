import { InputText } from 'primereact/inputtext';
import 'primeflex/primeflex.css';

const SearchInput = () => {
    return (
        <div className="flex flex-column">
            <h4>Busca un Pokémon</h4>
            <span className="p-input-icon-left" style={{"marginTop":"-1%"}}>
                <i className="pi pi-search"/>
                <InputText/>
            </span>
        </div>
    )
}

export default SearchInput;