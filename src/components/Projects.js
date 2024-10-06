import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Projects = () => {
  return (
    <Container id="projects" className="my-5">
      <h2 className="text-center">Projects</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            {/* Replace the image with an iframe */}
            <iframe 
              src="https://your-project1-link.com" 
              title="Project 1"
              style={{ height: '200px', width: '100%' }}
              frameBorder="0"
            />
            <Card.Body>
              <Card.Title>Project 1</Card.Title>
              <Card.Text>
                A brief description of your project. Add links to the project or a live demo.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            {/* Another iframe for Project 2 */}
            <iframe 
              src="https://nasaspaceapps2024-production-6dc8.up.railway.app/planet/10854555" 
              title="Project 2"
              style={{ height: '200px', width: '100%' }}
              frameBorder="0"
            />
            <Card.Body>
              <Card.Title>Project 2</Card.Title>
              <Card.Text>
                A brief description of your project. Add links to the project or a live demo.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            {/* Another iframe for Project 3 */}
            <iframe 
              src="https://your-project3-link.com" 
              title="Project 3"
              style={{ height: '200px', width: '100%' }}
              frameBorder="0"
            />
            <Card.Body>
              <Card.Title>Project 3</Card.Title>
              <Card.Text>
                A brief description of your project. Add links to the project or a live demo.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
