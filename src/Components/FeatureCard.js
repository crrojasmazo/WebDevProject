import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

function FeatureCard({ title, description }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" color="primary">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default FeatureCard;