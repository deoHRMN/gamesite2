import React, { useState } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import './Header.css';

const Header = ({setCurrentPage}) => {
  const [activePage, setactivePage] = useState('home'); // Default to 'home'
  const [expanded, setExpanded] = useState(false); // State to control Navbar collapse

  const linkStyle = {
    cursor: 'pointer',
    fontSize: '1.25rem',
    color: 'white', // Default color
  };

  const activeLinkStyle = {
    ...linkStyle,
    color: 'white', // Active link color
    fontWeight: 'bold', // Optional for more emphasis
  };


  return (
    <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
      <Container>
        <Navbar.Brand style={{fontSize: '2rem'}} href="#home">Game.io</Navbar.Brand>

        {/* Hamburger Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex w-100 justify-content-center">
            <Nav.Link
              className='nav-link'
              onClick={() => {
                setactivePage('home');
                setCurrentPage('home');
                setExpanded(false); // Close menu after click
              }}
              style={activePage === 'home' ? activeLinkStyle : linkStyle}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className='nav-link'
              onClick={() => {
                setactivePage('store');
                setCurrentPage('store');
                setExpanded(false); // Close menu after click
              }}
              style={activePage === 'store' ? activeLinkStyle : linkStyle}
            >
              Store
            </Nav.Link>
            <Nav.Link
              className='nav-link'
              onClick={() => {
                setactivePage('community');
                setCurrentPage('community');
                setExpanded(false); // Close menu after click
              }}
              style={activePage === 'community' ? activeLinkStyle : linkStyle}
            >
              Community
            </Nav.Link>
            <Nav.Link
              className='nav-link'
              onClick={() => {
                setactivePage('modshop');
                setCurrentPage('modshop');
                setExpanded(false); // Close menu after click
              }}
              style={activePage === 'modshop' ? activeLinkStyle : linkStyle}
            >
              ModShop
            </Nav.Link>
            <Nav.Link
              className='nav-link'
              onClick={() => {
                setactivePage('account');
                setCurrentPage('account');
                setExpanded(false); // Close menu after click
              }}
              style={activePage === 'account' ? activeLinkStyle : linkStyle}
            >
              Account
            </Nav.Link>
          </Nav>
          <Button variant="outline-danger" id="sign-out" onClick={() => setExpanded(false)}>
            Sign Out
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
