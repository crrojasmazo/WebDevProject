import React, { useContext } from 'react';
import {
  AppBar, Box, Toolbar, Button, Container, Avatar, Tooltip, IconButton,
} from '@mui/material';
import { Link, Navigate } from 'react-router-dom';
import currencyapplogo from '../Assets/Images/currencyapplogo.png';
import dogfire from '../Assets/Images/dogfire.jpg';
import { UserContext } from '../Context/Context';
import HeaderMenu from '../Components/HeaderMenu';

const Header = () => {
  const { user, setUser } = useContext(UserContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    setUser({
      ...user,
      isAuth: false,
    });
  };

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
              {user.isAuth
                ? (

                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                    >
                      <Avatar alt="User profile picture" src={dogfire} sx={{ width: 56, height: 56 }} />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Link to="/login">
                    <Button variant="contained" color="inherit">Log In</Button>
                  </Link>
                )}
            </Box>

            <HeaderMenu open={open} handleClose={handleClose} anchorEl={anchorEl} logout={logout} />

          </Toolbar>

        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
