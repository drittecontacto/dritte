import { useState, useRef, forwardRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/contact-img.svg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Contact = () => {
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("success");
  const [mensaje,setMensaje]=useState("")

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_snx79ow', 'template_gqxwmyr', form.current, 'upYkTj8p2_-GvMmUi')
      .then((result) => {
        setSeverity("success")
        setMensaje("Mail enviado,nos estaremos contactando a la brevedad")
        setOpen(true);
      }, (error) => {
        setSeverity("error")
        setMensaje("Hubo un error, intenta de nuevo más tarde")
        setOpen(true);
          // console.log(error.text);      
      });
      
      e.target.reset()
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            {/* <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility> */}
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <form onSubmit={sendEmail} ref={form}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="from_name"
                          placeholder="Tu nombre"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="form_subject"
                          placeholder="Asunto"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="form_email"
                          placeholder="Mail"
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea name="message" placeholder="Mensaje" />
                        <button type="submit" value="Send">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {mensaje}
        </Alert>
      </Snackbar>
    </section>
  );
}
