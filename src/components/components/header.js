import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import InlineCTAGroup from '../cta/InlineCTAGroup';
import logoImage from '../img/LOGO JCTAGENCY.png';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Sectors', href: '/sectors' },
  { label: 'Com treballem', href: '/com-treballem' },
  { label: 'Solucions', href: '/solucions' },
  { label: 'Resultats', href: '/resultats' },
  { label: 'Sobre JCT', href: '/sobre-jct' },
  { label: 'Recursos', href: '/recursos' },
  { label: 'Contacte', href: '/contacte' },
];

const Header = () => (
  <Navbar expand="lg" className="navbar-custom shadow-sm py-3" sticky="top">
    <Container>
      <Navbar.Brand href="/">
        <img src={logoImage} alt="JCT Agency" className="rounded-circle" />
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
        <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-3 ms-lg-4 navbar-cta">
          <a href="/avero" className="btn btn-outline-dark nav-avero-link fw-semibold px-4 py-2 shadow-sm">
            Avero
          </a>
          <InlineCTAGroup
            size="sm"
            className="mb-2 mb-lg-0"
            primaryVariant="primary"
            secondaryVariant="outline-primary"
          />
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
