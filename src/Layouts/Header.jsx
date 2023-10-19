import React from 'react';
import {
  AppBar, Box, Toolbar, Button, Container,
} from '@mui/material';
import { Link } from 'react-router-dom';
import currencyapplogo from '../Assets/Images/currencyapplogo.png';

const age = null;
const setAge = null;
const handleChange = (event) => {
  setAge(event.target.value);
};

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box padding={2}>
              <Link to="/">
                <img src={currencyapplogo} width={75} height={75} alt="logo" />
              </Link>
            </Box>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

              <Link to="/login">
                <Button variant="contained" color="inherit">Log In</Button>
              </Link>

            </Box>

          </Toolbar>

        </Container>
      </AppBar>
    </Box>
  );
}

export default Header;
