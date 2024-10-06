import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <Container>
        <p>© {new Date().getFullYear()} Jahidul Hassan Reshad. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
