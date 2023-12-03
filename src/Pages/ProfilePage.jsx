import React, { useEffect, useState, useContext } from "react";
import {
  Container,
  Avatar,
  Typography,
  Button,
  Grid,
  Paper,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";

import _ from "lodash";
import userService from "../ApiCalls/userService";

import dogfire from "../Assets/Images/dogfire.jpg";
import { UserContext } from "../Context/Context";
import authService from "../ApiCalls/authService";

const ProfilePage = () => {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [profesion, setProfesion] = useState("");
  const [aboutme, setAboutMe] = useState("");
  const [interest, setInterest] = useState("");
  const [contact, setContact] = useState("");
  const [editing, setEditing] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setName(_.get(user, "name"));
    setProfesion(_.get(user, "profession"));
    setAboutMe(_.get(user, "about"));
    setInterest(_.get(user, "interest"));
    setContact(_.get(user, "contact"));
  }, []);

  const handleClickEditButton = () => {
    setEditing(!editing);
  };

  const handleCancel = () => {
    setName(_.get(user, "name"));
    setProfesion(_.get(user, "profession"));
    setAboutMe(_.get(user, "about"));
    setInterest(_.get(user, "interest"));
    setContact(_.get(user, "contact"));
    setEditing(!editing);
  };

  const updateUserProfileInterface = () => {
    const id = _.get(user, "_id", undefined);
    if (id) {
      const res = authService.getUserInfo(id);
      res.then((val) => {
        if (val.status == 200) {
          const data = _.get(val, "data", {});
          setUser({
            ...user,
            ...data,
          });
        }
      });
    }
  };

  const handleSave = () => {
    const res = userService.updateUser({
      id: _.get(user, "_id"),
      name,
      profession: profesion,
      about: aboutme,
      interest,
      contact,
    });
    res
      .then((val) => {
        if (val.status === 200) {
          const data = _.get(val, "data");
          setUser({
            ...user,
            ...data,
          });
          setEditing(!editing);
          setOpen(true);
          updateUserProfileInterface();
        }
      })
      .catch(console.log);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name == "name") {
      setName(value);
    } else if (name == "profession") {
      setProfesion(value);
    } else if (name == "about") {
      setAboutMe(value);
    } else if (name == "interest") {
      setInterest(value);
    } else if (name == "contact") {
      setContact(value);
    }
  };

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
          You are up to date!
        </Alert>
      </Snackbar>
      <div style={{ paddingTop: 50 }}>
        <Container maxWidth="md">
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar
                  alt="User Profile"
                  src={dogfire}
                  sx={{ width: 100, height: 100 }}
                />
              </Grid>
              <Grid item>
                {editing ? (
                  <TextField
                    label="name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                  />
                ) : (
                  <Typography variant="h4">
                    {name ? name : "John Doe"}{" "}
                  </Typography>
                )}

                {editing ? (
                  <TextField
                    label="profession"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="profession"
                    value={profesion}
                    onChange={handleInputChange}
                  />
                ) : (
                  <Typography variant="subtitle1">
                    {profesion ? profesion : "Anti chamba"}
                  </Typography>
                )}
              </Grid>
            </Grid>

            <Typography variant="h5" style={{ marginTop: "20px" }}>
              About Me
            </Typography>
            {editing ? (
              <TextField
                label="about"
                variant="outlined"
                fullWidth
                margin="normal"
                name="about"
                value={aboutme}
                onChange={handleInputChange}
              />
            ) : (
              <Typography variant="body1">
                {aboutme ? aboutme : "Estoy obeso"}
              </Typography>
            )}
            <Typography variant="h5" style={{ marginTop: "20px" }}>
              My Interests
            </Typography>

            {editing ? (
              <TextField
                label="interest"
                variant="outlined"
                fullWidth
                margin="normal"
                name="interest"
                value={interest}
                onChange={handleInputChange}
              />
            ) : (
              <Typography variant="body1">
                {interest ? interest : "Me gusta el lol"}
              </Typography>
            )}
            <Typography variant="h5" style={{ marginTop: "20px" }}>
              Contact Information
            </Typography>

            {editing ? (
              <TextField
                label="contact"
                variant="outlined"
                fullWidth
                margin="normal"
                name="contact"
                value={contact}
                onChange={handleInputChange}
              />
            ) : (
              <Typography variant="body1">
                {contact ? contact : "333 333 33 33"}
              </Typography>
            )}

            {editing ? (
              <>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleCancel}
                  style={{ marginTop: "20px", marginRight: "5px" }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSave}
                  style={{ marginTop: "20px" }}
                >
                  Save
                </Button>
              </>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleClickEditButton}
                style={{ marginTop: "20px" }}
              >
                Edit Profile
              </Button>
            )}
          </Paper>
        </Container>
      </div>
    </Container>
  );
};

export default ProfilePage;
