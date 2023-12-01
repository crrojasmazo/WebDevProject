import { useState, React, useEffect, useContext } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { performLogIn } from "./PageHelper";
import { UserContext } from "../Context/Context";
import authService from "../ApiCalls/authService";
import _ from "lodash";

const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);

  const navigate = useNavigate();

  const handleClickSnackbar = () => {
    setOpen(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenError(false);
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

    if (formData.username !== "" && formData.password !== "") {
      const res = authService.signin({
        email: formData.username,
        password: formData.password,
      });
      res
        .then((val) => {
          if (val.status === 200) {
            setUser({
              ..._.get(val, "data", {}),
              isAuth: true,
            });
            setOpenError(false);
            setOpen(true);
            navigate("/");
          } else {
            setOpenError(true);
            setFormData({
              ...formData,
              errorMessage: "An error occurred",
            });
          }
        })
        .catch((e) => {
          console.log(e);
          setOpenError(true);
          setFormData({
            ...formData,
            errorMessage: "Wrong user or password, try again",
          });
        });
    } else {
      setFormData({
        ...formData,
        errorMessage: "Type username and password",
      });
    }
  };

  useEffect(() => {
    setFormData({
      ...formData,
      errorMessage: "",
    });
  }, [formData.username, formData.password]);

  return (
    <Container
      id="login_container"
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
          You are successfully logged in
        </Alert>
      </Snackbar>
      <Snackbar
        open={openError}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          sx={{ width: "100%" }}
        >
          Try again!
        </Alert>
      </Snackbar>
      <Container maxWidth="xs">
        <div style={{ paddingTop: 50 }}>
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

            <Typography variant="body1" color="error" align="center">
              {formData.errorMessage}
            </Typography>
            <Button
              type="submit"
              variant="contained"
              disabled={user.isAuth}
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
            {"Don't have an account yet? Sign Up  "}{" "}
            <Link to="/register">Here</Link>
          </Typography>
        </div>
      </Container>
    </Container>
  );
};

export default LoginPage;
