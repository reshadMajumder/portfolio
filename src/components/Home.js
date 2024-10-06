import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FaCode, FaServer } from 'react-icons/fa';

const Home = () => {
  return (
    <Container fluid className="bg-light py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-lg border-0">
            <Card.Body className="p-5">
              <h1 className="display-4 mb-4 text-primary">Jahidul Hassan Reshad</h1>
              <h2 className="h4 mb-4 text-secondary">Software Engineering Student</h2>
              <p className="lead mb-4">
                Passionate about creating robust and scalable web applications using cutting-edge technologies.
              </p>
              <Row className="text-center">
                <Col xs={6}>
                  <FaCode size={40} className="text-primary mb-3" />
                  <h3 className="h5">React JS Expert</h3>
                </Col>
                <Col xs={6}>
                  <FaServer size={40} className="text-primary mb-3" />
                  <h3 className="h5">Django API Developer</h3>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;