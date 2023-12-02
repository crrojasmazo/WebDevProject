import React, { useState } from "react";
import {
  Modal,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  Box,
  Typography,
} from "@mui/material";
import { Settings, Logout, Comment } from "@mui/icons-material";
import { Link } from "react-router-dom";

const HeaderMenu = ({ open, handleClose, anchorEl, handleOpenModal }) => (
  <Menu
    anchorEl={anchorEl}
    id="account-menu"
    open={open}
    onClose={handleClose}
    onClick={handleClose}
    PaperProps={{
      elevation: 0,
      sx: {
        overflow: "visible",
        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
        mt: 1.5,
        "& .MuiAvatar-root": {
          width: 32,
          height: 32,
          ml: -0.5,
          mr: 1,
        },
        "&:before": {
          content: '""',
          display: "block",
          position: "absolute",
          top: 0,
          right: 14,
          width: 10,
          height: 10,
          bgcolor: "background.paper",
          transform: "translateY(-50%) rotate(45deg)",
          zIndex: 0,
        },
      },
    }}
    transformOrigin={{ horizontal: "right", vertical: "top" }}
    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
  >
    <Link to="/profile" style={{ color: "black", textDecoration: "none" }}>
      <MenuItem>
        <Avatar /> Profile
      </MenuItem>
    </Link>
    <Divider />
    <Link to="/pqr" style={{ color: "black", textDecoration: "none" }}>
      <MenuItem>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        FAQs
      </MenuItem>
    </Link>
    <Link to="/message" style={{ color: "black", textDecoration: "none" }}>
      <MenuItem>
        <ListItemIcon>
          <Comment fontSize="small" />
        </ListItemIcon>
        Messages
      </MenuItem>
    </Link>
    <MenuItem onClick={handleOpenModal}>
      <ListItemIcon>
        <Logout fontSize="small" />
      </ListItemIcon>
      Logout
    </MenuItem>
  </Menu>
);

export default HeaderMenu;
