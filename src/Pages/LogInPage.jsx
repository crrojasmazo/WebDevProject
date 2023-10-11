import { useState, React } from 'react';
import {
  Container, Typography, TextField, Button, Modal, Box,
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
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const msg = 'Login successful / Login unsuccessful';

    handleOpen();

    return (
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {msg}
          </Typography>
        </Box>
      </Modal>
    );
  };

  return (
    <>
      <Header />
      <Container maxWidth="xl">
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
              id="login"
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
