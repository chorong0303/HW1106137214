import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControllLabel from '@material-ui/core/FormControlLabel';
function CheckboxExample(){
  const [checked, setchecked] = React.useState(true) 
    return(
      <FormControllLabel  control = {<Checkbox checked = {checked} onChange = {(e) => setchecked(e.target.checked)} inputProps  = {{'aria-label' : 'primary checkbox'}} icon = {<SaveIcon />} checkedIcon ={<DeleteIcon />} />} label = "Checkbox1" />
  
        
    )
  }
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <CheckboxExample />
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
