import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logoImage from '../img/joan-chorto-consultor-logo.svg';

const navItems = [
  { label: 'Método', href: '/com-treballem' },
  { label: 'Resultados', href: '/resultats' },
  { label: 'Sobre mí', href: '/sobre-jct' },
  { label: 'Reserva diagnóstico', href: '/contacto' },
  { label: 'Avero', href: '/avero' },
  { label: 'ConstructPro', href: '/constructpro' },
];

const Header = () => (
  <Navbar expand="lg" className="navbar-custom shadow-sm py-3" sticky="top">
    <Container>
      <Navbar.Brand href="/">
        <img src={logoImage} alt="Logotip de Joan Chorto Consultor" className="rounded-circle" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="main-navbar" />
      <Navbar.Collapse id="main-navbar">


        <Nav className="ms-lg-auto nav-main flex-column flex-lg-row align-items-lg-center gap-lg-3">
          {navItems.map((item) => (
            <Nav.Link key={item.href} href={item.href} className="fw-semibold text-nowrap">
              {item.label}
            </Nav.Link>
          ))}
        </Nav>
       
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
