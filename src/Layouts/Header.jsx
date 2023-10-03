import React from 'react';
import {
  AppBar, Toolbar, Typography, Button,
} from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/">
            My Homepage
          </Link>
        </Typography>

        <Link to="/login">
          <Button color="inherit">Log In</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
