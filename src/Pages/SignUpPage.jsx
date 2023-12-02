import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import authService from "../ApiCalls/authService";
import { UserContext } from "../Context/Context";

const SignUpPage = () => {
  const { user, setUser } = useContext(UserContext);

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleClickSnackbar = () => {
    setOpen(true);
  };

  const goToHome = () => {
    setTimeout(() => {
      navigate("/");
    }, "1000");
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    errorMessage: "",
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

    if (formData.username === "" && formData.password === "") {
      setFormData({
        ...formData,
        errorMessage: "Type username and password",
      });
      return;
    }

    const res = authService.signup({
      email: formData.username,
      password: formData.password,
    });
    res
      .then((val) => {
        if (val.status === 201) {
          setOpen(true);
          setUser({
            ...user,
            ..._.get(val, "data", {}),
            isAuth: true,
          });
          goToHome();
        } else {
          setFormData({
            ...formData,
            password: "",
            errorMessage: "An error occurred",
          });
        }
      })
      .catch(
        setFormData({
          ...formData,
          password: "",
          errorMessage: "An error occurred",
        })
      );
  };

  useEffect(() => {
    setFormData({
      ...formData,
      errorMessage: "",
    });
  }, [formData.username, formData.password]);
  return (
    <Container
      id="signup_container"
      maxWidth="xl"
      className="bg-light text-dark vh-100"
    >
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          you are in!
        </Alert>
      </Snackbar>
      <Container maxWidth="xs">
        <div style={{ paddingTop: 50 }}>
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
            <Typography variant="body1" color="error" align="center">
              {formData.errorMessage}
            </Typography>
            <Button
              type="submit"
              disabled={user.isAuth}
              variant="contained"
              color="primary"
              fullWidth
              size="large"
            >
              Sign Up
            </Button>
          </form>

          <Typography variant="body2" align="center" marginTop={2}>
            Already have an account? <Link to="/login">Login</Link>
          </Typography>
        </div>
      </Container>
    </Container>
  );
};

export default SignUpPage;
