import React from 'react';
import { Grid } from '@mui/material';
import Header from '../Layouts/Header';
import FeatureCard from '../Components/FeatureCard';

function Homepage() {
  return (
    <div>
      <Header />
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <FeatureCard
            title="Feature 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FeatureCard
            title="Feature 2"
            description="Praesent vel quam a lectus tincidunt fermentum."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FeatureCard
            title="Feature 3"
            description="Vestibulum vel quam nec massa dignissim rutrum."
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Homepage;