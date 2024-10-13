import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Your custom styles

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content text-center">
          <Col xs={12}>
            <p>&copy; 2024 Game.io. All Rights Reserved.</p>
          </Col>
          <Col xs={12}>
            <ul className="footer-links d-flex justify-content-center">
              <li><a href="#home">Privacy Policy</a></li>
              <li><a href="#home">Terms of Service</a></li>
              <li><a href="#home">Contact Us</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
