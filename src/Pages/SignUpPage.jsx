import React, { useState } from 'react';
import {
  Container, Typography, TextField, Button,
} from '@mui/material';
import { Link } from 'react-router-dom';

import Header from '../Layouts/Header';

function SignUpPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration logic here
    console.log('Form submitted with data:', formData);
  };

  return (
    <>
      <Header />
      <Container maxWidth="xs">
        <form onSubmit={handleSubmit}>
          <Typography variant="h4" align="center" gutterBottom>
            Sign Up
          </Typography>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
          >
            Sign Up
          </Button>
        </form>
        <Typography variant="body2" align="center" marginTop={2}>
          Already have an account?
          {' '}
          <Link to="/login">Login</Link>
        </Typography>
      </Container>
    </>
  );
}

export default SignUpPage;
