import React from "react";
import fc from "../Assets/Images/fc.jpg";

import { Container, Typography } from "@mui/material";

const EmptyView = () => {
  return (
    <Container component="div" maxWidth="sm">
      <img src={fc} alt="Overlay" />
      <Typography variant="h5">Aún no hay nada aquí</Typography>
    </Container>
  );
};

export default EmptyView;
