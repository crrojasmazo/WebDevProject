import React, { useContext, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Container,
  Avatar,
  Tooltip,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import currencyapplogo from "../Assets/Images/currencyapplogo.png";
import dogfire from "../Assets/Images/dogfire.jpg";
import { UserContext } from "../Context/Context";
import HeaderMenu from "../Components/HeaderMenu";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Header = () => {
  const { user, setUser } = useContext(UserContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    setUser({});
    window.location.reload(true);
  };

  const handleLeave = () => {
    handleCloseModal();
    logout();
  };

  const handleContinue = () => {
    handleCloseModal();
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
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {user.isAuth ? (
                <Tooltip title="Account settings">
                  <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                    <Avatar
                      alt="User profile picture"
                      src={dogfire}
                      sx={{ width: 56, height: 56 }}
                    />
                  </IconButton>
                </Tooltip>
              ) : (
                <Link to="/login">
                  <Button variant="contained" color="secondary">
                    Log In
                  </Button>
                </Link>
              )}
            </Box>

            <HeaderMenu
              open={open}
              handleClose={handleClose}
              anchorEl={anchorEl}
              handleOpenModal={handleOpenModal}
            />
          </Toolbar>
          <Modal open={openModal} onClose={handleCloseModal}>
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                textAlign="center"
              >
                Do you want to leave?
              </Typography>
              <Box display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleLeave}
                  sx={{ margin: 1 }}
                >
                  Yes, leave
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleContinue}
                  sx={{ margin: 1 }}
                >
                  No, continue
                </Button>
              </Box>
            </Box>
          </Modal>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
