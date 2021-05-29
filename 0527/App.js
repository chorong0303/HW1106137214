import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControllLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import {makeStyles,ThemeProvider,createMuiTheme} from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyle = makeStyles({
  root : {
    background : 'linear-gradient(45deg,#333,#999)',
    border : 0,
    borderRadius : 20,
    marginBottom : 15,
    color : 'white',
    padding : '5px 30px' 
  }
})

const theme = createMuiTheme({
  palette :{
    primary :{
      main : "#FF8000",
    },
    secondary:{
      main : "#9393FF",
    }
  }
})

function ButtonStyled() {
  const classes = useStyle();
  return <Button className = {classes.root}> styled button</Button>
}
function CheckboxExample(){
  const [checked, setchecked] = React.useState(true) 
    return(
      <FormControllLabel  control = {<Checkbox checked = {checked} onChange = {(e) => setchecked(e.target.checked)} inputProps  = {{'aria-label' : 'primary checkbox'}} icon = {<SaveIcon />} checkedIcon ={<DeleteIcon />} />} label = "Checkbox1" />
  
        
    )
  }
function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme = {theme}>
      <Container maxWidth = "lg"></Container>
    <div className="App">
      <header className="App-header">
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <Typography variant = "h2">
          Welcome to MUI
        </Typography>
        <Typography variant = "subtitle1">
          Material Ui
        </Typography>
        
      <ButtonStyled />
      <TextField  variant = "filled" color = "primary" type = "phone number" label = "your celephone number" placeholder = "enter"/>
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
    
</ThemeProvider>
  );
}

export default App;
