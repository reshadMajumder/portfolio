import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

const Skills = () => {
  return (
    <Container id="skills" className="my-5">
      <h2 className="text-center mb-4">Technical Proficiencies</h2>
      <Row className="mb-4">
        <Col md={6} className="mb-3">
          <h5 className="mb-2">React.js</h5>
          <ProgressBar now={90} label="90%" variant="success" />
        </Col>
        <Col md={6} className="mb-3">
          <h5 className="mb-2">Django</h5>
          <ProgressBar now={85} label="85%" variant="info" />
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-3">
          <h5 className="mb-2">JavaScript</h5>
          <ProgressBar now={80} label="80%" variant="warning" />
        </Col>
        <Col md={6} className="mb-3">
          <h5 className="mb-2">Python</h5>
          <ProgressBar now={75} label="75%" variant="danger" />
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
