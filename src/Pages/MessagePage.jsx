import { useState, React, useContext, useEffect } from "react";
import {
  Container,
  Typography,
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

const Message = () => {
  const { user, setUser } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    console.log(user);
    if (user.rol == "root") {
      const res = faqService.getAllFaqs();
      res
        .then((val) => {
          if (val.status == 200) {
            setMessages(_.get(val, "data", []));
          }
        })
        .catch(console.log);
      return;
    } else {
      const res = faqService.getFaqsById({ userid: _.get(user, "_id", "nn") });
      res
        .then((val) => {
          if (val.status == 200) {
            setMessages(_.get(val, "data", []));
          }
        })
        .catch(console.log);
      return;
    }
  }, []);

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
          {messages.map((message, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">
                  <b>{message.inqType}</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <b>Email: </b>
                  {message.email}
                </Typography>
                <Typography>
                  <b>Name: </b>
                  {message.name}
                </Typography>

                <Typography>
                  <b>Description: </b>
                  {message.description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Container>
    </Container>
  );
};

export default Message;
