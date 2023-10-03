import { useState, React } from 'react';
import {
  Container, Typography, TextField, Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../Layouts/Header';

function LoginPage() {
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
    // Add authentication logic here
    console.log('Form submitted with data:', formData);
  };

  return (
    <>
      <Header />
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
          >
            Login
          </Button>
        </form>
        <Typography variant="body2" align="center" marginTop={2}>
          {'dont&apos;t have an account yet? Sign Up  '}
          {' '}
          <Link to="/register">
            Here
          </Link>
        </Typography>
      </Container>
    </>
  );
}

export default LoginPage;
