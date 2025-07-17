import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logoImage from '../img/LOGO(Fondo Transparent).png';

const Header = () => (
  <Navbar bg="primary" variant="dark" expand="lg" className="py-3">
    <Container>
      <Navbar.Brand href="/">
        <img src={logoImage} alt="JCT Agency" style={{ height: '40px' }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="main-navbar" />
      <Navbar.Collapse id="main-navbar">
        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/contacto">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
