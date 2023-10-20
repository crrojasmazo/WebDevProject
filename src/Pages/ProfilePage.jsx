import React from 'react';
import {
  Container, Avatar, Typography, Button, Grid, Paper,
} from '@mui/material';

import dogfire from '../Assets/Images/dogfire.jpg';

const ProfilePage = () => (
  <Container id="login_container" maxWidth="xl" className="bg-light text-dark vh-100">
    <div style={{ paddingTop: 50 }}>
      <Container maxWidth="md">
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar
                alt="User Profile"
                src={dogfire}
                sx={{ width: 100, height: 100 }}
              />
            </Grid>
            <Grid item>
              <Typography variant="h4">John Doe</Typography>
              <Typography variant="subtitle1">Web Developer</Typography>
            </Grid>
          </Grid>

          <Typography variant="h5" style={{ marginTop: '20px' }}>
            About Me
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet varius velit. Vivamus sed posuere
            libero, non hendrerit felis.
          </Typography>

          <Typography variant="h5" style={{ marginTop: '20px' }}>
            My Interests
          </Typography>
          <Typography variant="body1">
            - Web Development
            - React and Material-UI
            - Suffer with web Development
          </Typography>

          <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
            Edit Profile
          </Button>
        </Paper>
      </Container>
    </div>
  </Container>
);

export default ProfilePage;
