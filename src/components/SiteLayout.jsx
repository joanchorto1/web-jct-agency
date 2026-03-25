import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import jcLogo from './img/joan-chorto-consultor-logo.svg';

function SiteLayout() {
  return (
    <div className="site-shell">
      <div className="site-backdrop" aria-hidden="true" />

      <header className="site-header">
        <div className="site-container site-header__inner">
          <div className="site-brand" aria-label="Joan Chorto Consultor">
            <img src={jcLogo} alt="Logo JC" className="site-brand__logo" />
            <span className="site-brand__name">Joan Chorto Consultor</span>
          </div>

          <a href="/contacto#reserva" className="site-header__cta">
            Contactar
          </a>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="site-container site-footer__inner">
          <div>
            <div className="site-brand site-brand--footer">
              <img src={jcLogo} alt="Logo JC" className="site-brand__logo" />
              <span className="site-brand__name">Joan Chorto Consultor</span>
            </div>
            <p>
              Consultoría empresarial para pymes industriales, construcción y servicios. Transformación operativa con
              foco en resultados medibles.
            </p>
            <div className="site-footer__legal">
              <Link to="/politica-privacidad">Política de privacidad / Privacy Policy</Link>
            </div>
          </div>
          <div className="site-footer__contact">
            <a href="mailto:joan@jctagency.com">joan@jctagency.com</a>
            <a href="tel:+34633391411">633391411</a>
            <span>L'Aldea Tarragona 43896</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SiteLayout;
