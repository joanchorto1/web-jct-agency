import React, { useEffect, useState } from 'react';
import './header.css';
import logoImage from '../img/joan-chorto-consultor-logo.svg';

const whatsappDiagnostic = 'https://wa.me/34633391411?text=Hola%20Joan%2C%20vull%20un%20diagnostic%20gratuit.';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const handleResize = () => {
      if (window.innerWidth > 992) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="home-static__header">
      <div className="home-static__header-inner">
        <a href="/" className="home-static__brand" onClick={closeMenu}>
          <img
            src={logoImage}
            alt="Joan Chorto Consultor"
            className="home-static__brand-logo"
          />
          <span className="home-static__brand-text">Joan Chorto <span>Consultor</span></span>
        </a>

        <button
          type="button"
          className="home-static__menu-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="home-static-primary-nav"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="home-static__menu-toggle-icon" aria-hidden="true" />
          <span className="home-static__menu-toggle-label">Menú</span>
        </button>

        <nav
          id="home-static-primary-nav"
          className={`home-static__nav${isMenuOpen ? ' is-open' : ''}`}
          aria-label="Navegación principal"
        >
          <a href="/consultoria" onClick={closeMenu}>Consultoría</a>
          <a href="/avero" onClick={closeMenu}>Avero</a>
          <a href="/constructpro" onClick={closeMenu}>ConstructPro</a>
          <a
            href={whatsappDiagnostic}
            target="_blank"
            rel="noopener noreferrer"
            className="home-static__cta"
            title="Reserva diagnóstico per WhatsApp"
            onClick={closeMenu}
          >
            Reserva diagnóstico
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
