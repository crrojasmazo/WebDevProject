import { useState, React } from 'react';
import {
  Container, Typography, TextField, Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../Layouts/Header';

const users = {
  alejandro: 'mazamorra',
  luis: '321321',
  rojas: 'aaa',
};

let modal = null;

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

    modal = document.getElementById('modalLogin');
    modal.style.display = 'contents';

    document.querySelectorAll('.cerrar_modal').forEach((boton) => {
      boton.addEventListener('click', () => {
        console.log('¡Botón presionado!');
        modal.style.display = 'hidden';
        modal.innerHTML = 'hidden';
      });
    });

    // Rojas perdon...
    if (users[formData.username] != null) { if (users[formData.username] === formData.password) { console.log('Bienvenido ome'); } else { console.log('Clave incorrecta'); } } else { console.log('Usuario no existe'); }
  };

  return (
    <>
      <Header />
      <Container id="login_container" maxWidth="xl" className="bg-dark text-light vh-100">
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
              className="text-bg-secondary"
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
              className="text-bg-secondary"
            />
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

            <div className="modal fade" id="modalLogin" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Login</h1>
                    <button type="button" className="btn-close cerrar_modal" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="modal-body" />
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary cerrar_modal" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary cerrar_modal">Save changes</button>
                  </div>
                </div>
              </div>
            </div>

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
