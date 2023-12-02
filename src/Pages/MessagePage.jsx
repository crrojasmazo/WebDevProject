import { useState, React, useContext, useEffect } from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Snackbar,
  Alert,
  Button,
  Box,
  TextField,
  Modal,
} from "@mui/material";
import faqService from "../ApiCalls/faqService";
import { UserContext } from "../Context/Context";
import _ from "lodash";

import { ExpandMore } from "@mui/icons-material";

const Message = () => {
  const { user, setUser } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [messageToSend, setMessageToSend] = useState("");
  const [currentMessage, setCurrentMessage] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleModal = (message) => {
    setCurrentMessage({ ...message });
    handleOpen();
  };

  useEffect(() => {
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

  const handleClose = () => {
    setModalOpen(false);
    setMessageToSend(""); // Limpiar el mensaje al cerrar el modal
  };

  const handleSendMessage = () => {
    const res = faqService.answerFaq({
      faqid: _.get(currentMessage, "_id", ""),
      answer: messageToSend,
    });
    res
      .then((val) => {
        if (val.status == 200) {
          setOpen(false);
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
            const res = faqService.getFaqsById({
              userid: _.get(user, "_id", "nn"),
            });
            res
              .then((val) => {
                if (val.status == 200) {
                  setMessages(_.get(val, "data", []));
                }
              })
              .catch(console.log);
            return;
          }
        }
      })
      .then(console.log);
    handleClose();
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
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography>
            <b>Email: </b>
            {currentMessage.email}
          </Typography>
          <Typography>
            <b>Name: </b>
            {currentMessage.name}
          </Typography>
          <Typography>
            <b>Description: </b>
            {currentMessage.description}
          </Typography>
          <Typography>
            <b>Answers: </b>
            {_.get(currentMessage, "answers", []).length > 0
              ? currentMessage.answers.map((message) => <li>{message}</li>)
              : null}
          </Typography>
          <Box textAlign="center" marginTop={1} marginBottom={1}>
            <TextField
              id="filled-multiline-flexible"
              label="Message"
              value={messageToSend}
              multiline
              maxRows={4}
              variant="filled"
              onChange={(e) => setMessageToSend(e.target.value)}
            />
          </Box>
          <Box textAlign="center" marginTop={1}>
            <Button variant="contained" onClick={handleSendMessage}>
              Send
            </Button>
            <Button
              variant="contained"
              onClick={handleClose}
              style={{ marginLeft: "8px" }}
            >
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
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

                {_.get(message, "answers", []).length > 0 && (
                  <Typography>
                    <b>Answers: </b>
                    {_.get(message, "answers", []).length > 0
                      ? message.answers.map((message) => <li>{message}</li>)
                      : null}
                  </Typography>
                )}

                {user.rol == "root" ? (
                  <Box textAlign="center" marginTop={1}>
                    <Button
                      variant="contained"
                      onClick={() => handleModal(message)}
                    >
                      Answer
                    </Button>
                  </Box>
                ) : null}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Container>
    </Container>
  );
};

export default Message;
