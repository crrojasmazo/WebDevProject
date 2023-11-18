import React from "react";
import { Grid, Container } from "@mui/material";

import Convert from "../Components/Convert";

import imagen1 from "../Assets/Images/prueba1.png";
import grafica1 from "../Assets/Images/prueba11.png";
import imagen2 from "../Assets/Images/prueba2.png";
import grafica2 from "../Assets/Images/prueba21.png";

const MainIndex = () => (
  <Container maxWidth="xl" id="main_index" className="bg-light text-dark">
    <Grid
      container
      direction="column"
      alignContent="center"
      alignItems="center"
      paddingTop={10}
    >
      <Grid xs={12} item marginBottom={10}>
        <Convert />
      </Grid>
      <Grid item xs={1}>
        <Grid container>
          <Grid item xs={4}>
            <img style={{ height: "90%" }} src={imagen1} alt="primera imagen" />
          </Grid>
          <Grid item xs={4}>
            <img
              style={{ height: "90%" }}
              src={grafica1}
              alt="primera grafica"
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={4}>
            <img style={{ height: "75%" }} src={imagen2} alt="segunda imagen" />
          </Grid>
          <Grid item xs={4}>
            <img
              style={{ height: "70%" }}
              src={grafica2}
              alt="segunda grafica"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Container>
);

export default MainIndex;
