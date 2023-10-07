import React from 'react';
import {
  AppBar, Toolbar, Typography, Button,
} from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/">
          <Typography variant="h6">

            My Homepage

          </Typography>
        </Link>
        <Link to="/register">
          <Button variant="contained" color="inherit">Sign Up</Button>
        </Link>

        <Link to="/login">
          <Button variant="contained" color="inherit">Log In</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
