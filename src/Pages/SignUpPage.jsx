import React, { useState, useEffect } from 'react';
import {
  Container, Typography, TextField, Button,
} from '@mui/material';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    errorMessage: '',
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

    console.log('Form submitted with data:', formData);

    if (formData.username === '' && formData.password === '') {
      setFormData({
        ...formData,
        errorMessage: 'Type username and password',
      });
    }
  };

  useEffect(() => {
    setFormData({
      ...formData,
      errorMessage: '',
    });
  }, [formData.username, formData.password]);
  return (
    <Container id="signup_container" maxWidth="xl" className="bg-light text-dark vh-100">
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
          <Typography variant="body1" color="error" align="center">{formData.errorMessage}</Typography>
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
    </Container>
  );
};

export default SignUpPage;
