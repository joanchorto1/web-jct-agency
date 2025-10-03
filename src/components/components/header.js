import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logoImage from '../img/LOGO JCTAGENCY.png';

const Header = () => (
  <Navbar expand="lg" className="navbar-custom shadow-sm py-3" sticky="top">
    <Container>
      <Navbar.Brand href="/">
        <img src={logoImage} alt="JCT Agency" className="rounded-circle" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="main-navbar" />
      <Navbar.Collapse id="main-navbar">
        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/avero">Avero</Nav.Link>
          <Nav.Link href="/recursos">Recursos</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
          <Nav.Link href="/pressupost">Pressupost</Nav.Link>
          <Nav.Link href="/contacto">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
