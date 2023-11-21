import {useState} from 'react';
import { InputText } from "primereact/inputtext";
import { InputTextrea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

const FormPost = () => {
    const [post, setPost] = useState({
        tituto:'',
        cuerpo:'',
        imagen:''
    })
    const setFormData = (event) => {
        setPost({
            ...userData,
            [event.target.id] : event.target.value
        })

    }
    return (
        <>
            <label>Titulo</label>
            <InputText id="titulo" onChange={(event) => {setFormData(event)}}/>
            <label>Cuerpo</label>
            <InputTextrea id="cuerpo" autosize onChange={(event) => {setFormData(event)}}/>
            <label>Imagen</label>
            <InputText id="imagen" onChange={(event) => {setFormData(event)}}/>
            <Button label="Añadir post" icon="pi pi-check"/>
        </>
    )
}

export default FormPost