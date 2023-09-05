import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

// Autenicacion de firebase
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
//import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyBYO4G0DcptvDQEUGMgNp5ElyJScJpn4wI",
  authDomain: "testingfirebase-eabc9.firebaseapp.com",
  projectId: "testingfirebase-eabc9",
  storageBucket: "testingfirebase-eabc9.appspot.com",
  messagingSenderId: "622698079939",
  appId: "1:622698079939:web:7aaf9c5334bdbd86d82476"
};

const app = initializeApp(firebaseConfig);
/*initializeApp({
  credential: applicationDefault()
});*/

const db = getFirestore();
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/*
// importar autenticacion por google
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
const provider = new GoogleAuthProvider();
const auth = getAuth();
signInWithPopup(auth, provider)
.then((result) => {
  //Realiza la autenticacion
  const credential = GoogleAuthProvider.credentialFromResult(result);
  // Token obtenido de google luego del logueo
  const token = credential.accessToken;
  // Informacion del usuario logueado
  console.log(result.user.email);
}).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.customData.email;
  // The AuthCredential type that was used.
  const credential = GoogleAuthProvider.credentialFromError(error);
  // ...
});*/
/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
