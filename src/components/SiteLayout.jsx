import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import jcLogo from './img/joan-chorto-consultor-logo.svg';

const FooterIcon = ({ children }) => (
  <span className="site-footer__icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  </span>
);

function SiteLayout() {
  return (
    <div className="site-shell">
      <div className="site-backdrop" aria-hidden="true" />

      <header className="site-header">
        <div className="site-container site-header__inner">
          <Link to="/" className="site-brand site-header__brand-link" aria-label="Ir al inicio de Joan Chorto Consultor">
            <img src={jcLogo} alt="Logo JC" className="site-brand__logo" />
            <span className="site-brand__name">
              Joan Chorto <span>Consultor</span>
            </span>
          </Link>

          <nav className="site-header__nav" aria-label="Navegación principal">
            <Link to="/analisis-gratuito">Análisis gratuito</Link>
            <Link to="/productos">Productos</Link>
            <Link to="/problemas">Problemas</Link>
            <Link to="/contacto">Contacto</Link>
          </nav>

          <a href="/contacto#reserva" className="site-header__cta">
            Analizar mi empresa
          </a>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="site-container site-footer__inner">
          <div className="site-footer__brand-block">
            <div className="site-brand site-brand--footer">
              <img src={jcLogo} alt="Logo JC" className="site-brand__logo" />
              <span className="site-brand__name">Joan Chorto Consultor</span>
            </div>
            <p className="site-footer__intro">
              Consultoría empresarial para pymes industriales, construcción y servicios. Transformación operativa con
              foco en resultados medibles.
            </p>
            <div className="site-footer__quick-links">
              <Link to="/analisis-gratuito">
                <FooterIcon>
                  <path d="M4 19h16" />
                  <path d="M7 16V8" />
                  <path d="M12 16V5" />
                  <path d="M17 16v-4" />
                </FooterIcon>
                Análisis
              </Link>
              <Link to="/productos">
                <FooterIcon>
                  <path d="M12 3l7 4v10l-7 4-7-4V7l7-4Z" />
                  <path d="M12 7v10" />
                  <path d="m5 9 7 4 7-4" />
                </FooterIcon>
                Productos
              </Link>
              <Link to="/contacto">
                <FooterIcon>
                  <path d="M4 6h16v12H4z" />
                  <path d="m4 8 8 6 8-6" />
                </FooterIcon>
                Contacto
              </Link>
            </div>
            <div className="site-footer__legal">
              <Link to="/politica-privacidad">
                <FooterIcon>
                  <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z" />
                  <path d="m9.5 12 1.8 1.8L15 10" />
                </FooterIcon>
                Política de privacidad
              </Link>
            </div>
          </div>
          <div className="site-footer__seo">
            <p className="site-footer__heading">RECURSOS</p>
            <div className="site-footer__seo-links">
              <Link to="/guias">Índice de guías</Link>
              <Link to="/problemas">Índice de problemas</Link>
              <Link to="/consultoria-informatica">Blog SEO local</Link>
            </div>
          </div>
          <div className="site-footer__contact">
            <p className="site-footer__heading">Contacto</p>
            <a href="mailto:joan@jctagency.com">
              <FooterIcon>
                <path d="M4 6h16v12H4z" />
                <path d="m4 8 8 6 8-6" />
              </FooterIcon>
              joan@jctagency.com
            </a>
            <a href="tel:+34633391411">
              <FooterIcon>
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.4 2.6a2 2 0 0 1-.6 1.8l-1.2 1.2a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 1.8-.6l2.6.4a2 2 0 0 1 1.7 2Z" />
              </FooterIcon>
              633391411
            </a>
            <span>
              <FooterIcon>
                <path d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </FooterIcon>
              L'Aldea Tarragona 43896
            </span>
          </div>
        </div>
        <div className="site-container site-footer__bottom">
          <span>© {new Date().getFullYear()} Joan Chorto Consultor</span>
          <span>Sistemas, procesos y digitalización orientados a resultado</span>
        </div>
      </footer>
    </div>
  );
}

export default SiteLayout;
