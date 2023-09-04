import logo from './logo.svg';
import './App.css';
import  { initializiteApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyBYO4G0DcptvDQEUGMgNp5ElyJScJpn4wI",
  authDomain: "testingfirebase-eabc9.firebaseapp.com",

  projectId: "testingfirebase-eabc9",

  storageBucket: "testingfirebase-eabc9.appspot.com",

  messagingSenderId: "622698079939",

  appId: "1:622698079939:web:7aaf9c5334bdbd86d82476"
  
}

const app = initializiteApp(firebaseConfig);
import {getAuth, signInWithCredential, GoogleAuthProvider} from 'firebase/auth';
const provider = new GoogleAuthProvider;
const auth = getAuth();
signInWithCredential(auth, provider).catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  const email = error.customData.email;
  const credential = GoogleAuthProvider.credentialFromError(error);
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
