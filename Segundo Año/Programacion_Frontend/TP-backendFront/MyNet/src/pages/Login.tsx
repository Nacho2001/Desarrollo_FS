import { IonContent, IonRow } from "@ionic/react";
import Input from "../components/Input";
import { IonButton } from "@ionic/react";
const Login = () => {
    let usuario = {titulo:"Nombre de Usuario", tipo:"", placeholder:"nombreUsuario"};
    let password = {titulo:"Contraseña", tipo:"password", placeholder:"password"};
    let email = {titulo:"Email", tipo:"email",placeholder:"mail@email.com"};

    return (
        <>
        {/*<div style={{
            "background": "linear-gradient(to bottom, #000066 0%, #3399ff 100%"
        }}>*/}
            <IonContent>
                <div style={{
                    "display":"flex",
                    "alignItems":"center",
                    "justifyContent":"center",
                    "flexDirection":"column"
                }}>
                    <Input info={usuario}/>
                    <Input info={email} />
                    <Input info={password} />
                    <IonButton style={{"marginTop":"3%"}}>Ingresar</IonButton>
                </div>
            </IonContent>
        </>
    )
}

export default Login;