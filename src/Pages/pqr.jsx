import { useState, React, Fragment } from "react";
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
} from "@mui/material";
import { Link } from "react-router-dom";

import { ExpandMore } from "@mui/icons-material";
import { faqs } from "./PageHelper";

const pqr = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiry: "",
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
    console.log("Form submitted with data:", formData);
  };

  return (
    <Container
      id="pqr_container"
      maxWidth="xl"
      className="bg-light text-dark vh-100"
    >
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
            type="email"
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
            name="inquiry"
            variant="outlined"
            multiline
            fullWidth
            rows={4}
            value={formData.inquiry}
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
