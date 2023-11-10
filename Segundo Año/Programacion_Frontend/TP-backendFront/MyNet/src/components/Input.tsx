import { IonInput } from "@ionic/react"
import { propsLabel } from "../interfaces";


const Input = (props:propsLabel) => {
    let info = props['info']
    return (
            <IonInput style={{
            "width":"80%",
            "marginTop":"3%",
            "maxWidth":"240px",
            "justifyContent":"center"
        }} 
        label={info.titulo} labelPlacement="stacked"  type={info.tipo} placeholder={info.placeholder}></IonInput>
    )    
}

export default Input;