import { IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonTabs } from "@ionic/react";
import { Redirect, Route } from 'react-router';
import Home from "../pages/Home";
import Publicaciones from "../pages/Publicaciones";
import Usuarios from "../pages/Usuarios";
import Chat from "../pages/Chat";
import { exitOutline, globeOutline, albumsOutline,peopleCircleOutline, chatbubblesOutline } from 'ionicons/icons';
import { IonReactRouter } from "@ionic/react-router";
const MyNetRouter:React.FC = () => {
    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Redirect exact path="/" to="/home"/>
                    <Route path="/home" render={() => <Home/>} exact={true}/>
                    <Route path="/posts" render={() => <Publicaciones/>} exact={true}/>
                    <Route path="/usuarios" render={() => <Usuarios/>} exact={true}/>
                    <Route path="/chat" render={() => <Chat/>} exact={true}/>
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="inicio" href="/home">
                        <IonIcon icon={globeOutline}/>
                        <IonLabel>Inicio</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="posts" href="/posts">
                        <IonIcon icon={albumsOutline}/>
                        <IonLabel>Mi Muro</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="chat" href="/chat">
                        <IonIcon icon={chatbubblesOutline}/>
                        <IonLabel>Chat</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="usuarios" href="/usuarios">
                        <IonIcon icon={peopleCircleOutline}/>
                        <IonLabel>Usuarios</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="salir" href="">
                        <IonIcon icon={exitOutline}/>
                        <IonLabel>Salir</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    )
}

export default MyNetRouter;