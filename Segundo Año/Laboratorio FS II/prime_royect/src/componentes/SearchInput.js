import { InputText } from 'primereact/inputtext';

const SearchInput = () => {
    <>
        <label>Busca un pokemon</label>
        <span>
            <i className="pi pi-search"/>
            <InputText/>
        </span>
    </>
}

export default SearchInput;