import React from 'react';
import {
  AppBar, Box, Toolbar, Button, MenuItem, Container, InputLabel, FormControl, Select,
} from '@mui/material';
import { Link } from 'react-router-dom';
import currencyapplogo from '../Assets/Images/currencyapplogo.png';
/*
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
*/
/* const [age, setAge] = React.usestate(''); */
const age = null;
const setAge = null;
const handleChange = (event) => {
  setAge(event.target.value);
};

function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <img src={currencyapplogo} width={75} height={75} alt="logo" />
          </Link>

          <Link to="/login">
            <Button variant="contained" color="inherit">Log In</Button>
          </Link>

        </Toolbar>
        <Box>
          <FormControl className="w-25">
            <InputLabel id="demo-simple-select-label">Guest</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>User</MenuItem>
              <MenuItem value={20}>Support</MenuItem>
              <MenuItem value={30}>Settings</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Container>
    </AppBar>
  );
}

export default Header;
