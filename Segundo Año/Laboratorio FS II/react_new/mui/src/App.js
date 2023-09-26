import './App.css';
import Button from '@material-ui/core/Button';
import {TextField} from '@material-ui/core';
function App() {
  return (
    <div className="App" style={{"padding":"10px"}}>
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
