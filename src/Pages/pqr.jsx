import { useState, React, useContext, useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Snackbar,
  Alert,
} from "@mui/material";
import faqService from "../ApiCalls/faqService";
import { UserContext } from "../Context/Context";
import _ from "lodash";

import { ExpandMore } from "@mui/icons-material";
import { faqs } from "./PageHelper";

const pqr = () => {
  const { user, setUser } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    setFormData({
      ...formData,
      name: _.get(user, "name", ""),
      email: _.get(user, "email", ""),
    });
  }, []);

  const cleanForm = () => {
    setFormData({
      ...formData,
      name: _.get(user, "name", ""),
      email: _.get(user, "email", ""),
      inquiryType: "",
      description: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here
    const res = faqService.createFaq({
      userid: _.get(user, "_id", "nn"),
      name: formData.name,
      email: formData.email,
      inqType: formData.inquiryType,
      description: formData.description,
    });
    res
      .then((val) => {
        if (val.status == 201) {
          setOpen(true);
          cleanForm();
        }
      })
      .catch(console.log);
  };

  return (
    <Container
      id="pqr_container"
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
          Your FAQ has been sent!
        </Alert>
      </Snackbar>
      <Container maxWidth="sm">
        <div style={{ paddingTop: 50 }}>
          {faqs.map((faq, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>

        <Typography variant="h5" align="center" gutterBottom marginTop={5}>
          Inquiry Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={handleInputChange}
            required
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleInputChange}
            required
            margin="normal"
          />
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel>Inquiry Type</InputLabel>
            <Select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleInputChange}
              label="Inquiry Type"
            >
              <MenuItem value="Complain">Complain</MenuItem>
              <MenuItem value="Request">Request</MenuItem>
              <MenuItem value="Suggestion">Suggestion</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Description"
            name="description"
            variant="outlined"
            multiline
            fullWidth
            rows={4}
            value={formData.description}
            onChange={handleInputChange}
            required
            margin="normal"
          />
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary">
              Submit Inquiry
            </Button>
          </Box>
        </form>
      </Container>
    </Container>
  );
};

export default pqr;
