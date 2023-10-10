import React from 'react';
import { Grid } from '@mui/material';

import Convert from '../Components/Convert';

import imagen1 from '../Assets/Images/prueba1.png';
import grafica1 from '../Assets/Images/prueba11.png';
import imagen2 from '../Assets/Images/prueba2.png';
import grafica2 from '../Assets/Images/prueba21.png';

function MainIndex() {
  return (
    <Grid container style={{ 'background-color': '#1c1d1f' }}>
      <Grid container xs={11} spacing={0}>
        <Grid container>
          <Grid item xs={4}>
            <img style={{ height: '90%' }} src={imagen1} alt="primera imagen" />
          </Grid>
          <Grid item xs={4}>
            <img style={{ height: '90%' }} src={grafica1} alt="primera grafica" />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={4}>
            <img style={{ height: '75%' }} src={imagen2} alt="segunda imagen" />
          </Grid>
          <Grid item xs={4}>
            <img style={{ height: '70%' }} src={grafica2} alt="segunda grafica" />
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={1} item>
        <Convert />
      </Grid>
    </Grid>
  );
}

export default MainIndex;
