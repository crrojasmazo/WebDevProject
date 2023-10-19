import { useState, React, useEffect } from 'react';
import {
  Container, Typography, TextField, Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../Layouts/Header';
import { performLogIn } from './PageHelper';

const modal = null;

function LoginPage() {
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

    if (formData.username !== '' && formData.password !== '') {
      const res = performLogIn(formData);
      if (!res) {
        setFormData({
          ...formData,
          errorMessage: 'Invalid Username or password',
        });
      }
    } else {
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
    <>
      <Header />
      <Container id="login_container" maxWidth="xl" className="bg-light text-dark vh-100">
        <Container maxWidth="xs">
          <form onSubmit={handleSubmit}>
            <Typography variant="h4" align="center" gutterBottom>
              Login
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
              id="login"
              data-bs-toggle="modal"
              data-bs-target="#modalLogin"
            >
              Login
            </Button>

          </form>
          <Typography variant="body2" align="center" marginTop={2}>
            {"Don't have an account yet? Sign Up  "}
            {' '}
            <Link to="/register">
              Here
            </Link>
          </Typography>
        </Container>
      </Container>
    </>
  );
}

export default LoginPage;
