import React from 'react';
import {
  AppBar, Toolbar, Button, Container,
} from '@mui/material';
import { Link } from 'react-router-dom';
import currencyapplogo from '../Assets/Images/currencyapplogo.png';

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
      </Container>
    </AppBar>
  );
}

export default Header;
