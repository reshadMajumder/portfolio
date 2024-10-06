import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profile from '../assets/my.jpg';

const About = () => {
  return (
    <Container id="about" className="my-5 pt-4">
      <Row>
        <Col md={4}>
          <Image src={profile} roundedCircle fluid style={{ width: '55%', height: 'auto', objectFit: 'cover', aspectRatio: '1 / 1' }} />
        </Col>
        <Col md={8}>
          <h2>About Me</h2>
          <p>
            As a dedicated software developer, I specialize in creating robust and scalable web applications using React and Django. Currently, I am pursuing a degree in Software Engineering at Daffodil International University, where I am honing my skills and staying up-to-date with the latest industry trends.
          </p>
          <p>
            My passion for technology and problem-solving drives me to deliver high-quality solutions that meet and exceed client expectations. I am committed to continuous learning and professional growth in the ever-evolving field of software development.
          </p>
          <div className="social-links mt-3">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="me-3">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="me-3">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
