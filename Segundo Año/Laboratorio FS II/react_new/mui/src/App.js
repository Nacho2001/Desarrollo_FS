import './App.css';
import Button from '@material-ui/core/Button';
import {TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const myEstilo = makeStyles({
  divCentral: {
    padding: "2%",
    alignItems: "center"
  }
})
function App() {
  return (
    <div className={myEstilo.divCentral}>
      <div style={{"margin":"2%"}}>
        <div>
          <TextField id="outlined-basic" label="username" variant="outlined" />
        </div>
        <div>
          <TextField id="outlined-basic" label="password" variant="outlined" />
        </div>
      </div>
      <div>
        <Button variant='contained' color='primary'>Soy azul!</Button>
        <Button variant='contained' color='secondary'>Soy rojo!</Button>
      </div>
    </div>
  );
}

export default App;
