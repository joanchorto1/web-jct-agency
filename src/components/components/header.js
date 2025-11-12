import React from 'react';
import './header.css';
import logoImage from '../img/joan-chorto-consultor-logo.svg';

const whatsappDiagnostic = 'https://wa.me/34633391411?text=Hola%20Joan%2C%20vull%20un%20diagnostic%20gratuit.';

const Header = () => (
  <header className="home-static__header">
    <div className="home-static__header-inner">
      <a href="/" className="home-static__brand">
        <img
          src={logoImage}
          alt="Joan Chorto Consultor"
          className="home-static__brand-logo"
        />
        <span className="home-static__brand-text">Joan Chorto <span>Consultor</span></span>
      </a>

      <nav className="home-static__nav" aria-label="Navegación principal">
        <a href="#metodo">Método</a>
        <a href="#resultados">Resultados</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="/avero">Avero</a>
        <a href="/constructpro">ConstructPro</a>
        <a
          href={whatsappDiagnostic}
          target="_blank"
          rel="noopener noreferrer"
          className="home-static__cta"
          title="Reserva diagnóstico per WhatsApp"
        >
          Reserva diagnóstico
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
