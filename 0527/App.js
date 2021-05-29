import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ButtonGroup variant = "contained" size = "large" >
        <Button  color = "secondary" startIcon = {<SaveIcon />}>
          Save
        </Button>
        <Button color = "primary"  startIcon = {<DeleteIcon />}>
          Delete
        </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
