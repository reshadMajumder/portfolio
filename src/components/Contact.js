import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaWhatsapp,FaInstagram, FaGithub ,FaFacebook} from 'react-icons/fa';

const Contact = () => {
  return (
    <Container id="contact" className="my-5">

      <Row className="justify-content-center mt-4">
        <Col md={6} className="text-center">
          <h4 className="mb-3">Connect with me</h4>
          <Row>
            <Col xs={6} md={3}>
              <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <FaFacebook size={40} className="text-primary mb-3" />
                <h3 className="h5">Facebook</h3>
              </a>
            </Col>
            <Col xs={6} md={3}>
              <a href="https://github.com/reshadMajumder" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <FaGithub size={40} className="text-dark mb-3" />
                <h3 className="h5">GitHub</h3>
              </a>
            </Col>
            <Col xs={6} md={3}>
              <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <FaInstagram size={40} className="text-danger mb-3" />
                <h3 className="h5">Instagram</h3>
              </a>
            </Col>
            <Col xs={6} md={3}>
              <a href="https://wa.me/yourmobilenumber" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <FaWhatsapp size={40} className="text-success mb-3" />
                <h3 className="h5">WhatsApp</h3>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
