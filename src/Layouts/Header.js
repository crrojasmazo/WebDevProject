import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Header() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            My Homepage
          </Typography>
          <Button color="inherit">Log In</Button>
        </Toolbar>
      </AppBar>
    );
  }

export default Header;