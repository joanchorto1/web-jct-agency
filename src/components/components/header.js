import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logoImage from '../img/joan-chorto-consultor-logo.svg';
import { WHATSAPP_LINKS } from '../../utils/whatsapp';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Sectors', href: '/sectors' },
  { label: 'Com treballem', href: '/com-treballem' },
  { label: 'Solucions', href: '/solucions' },
  { label: 'ConstructPro', href: '/constructpro' },
  { label: 'Avero', href: '/avero' },
  { label: 'Resultats', href: '/resultats' },
  { label: 'Sobre Joan', href: '/sobre-jct' },
  { label: 'Recursos', href: '/recursos' },
  { label: 'Contacte per WhatsApp', href: WHATSAPP_LINKS.generalInquiry },
];

const Header = () => (
  <Navbar expand="lg" className="navbar-custom shadow-sm py-3" sticky="top">
    <Container>
      <Navbar.Brand href="/">
        <img src={logoImage} alt="Joan Chorto Consultor" className="rounded-circle" />
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
