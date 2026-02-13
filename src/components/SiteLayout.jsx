import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import jcLogo from './img/joan-chorto-consultor-logo.svg';

const navItems = [
  { label: 'Inicio', to: '/' },
  { label: 'Proyectos', to: '/proyectos' },
  { label: 'Soluciones', to: '/soluciones' },
  { label: 'Consultoría', to: '/consultoria' },
  { label: 'Contacto', to: '/contacto' },
];

function SiteLayout() {
  return (
    <div className="site-shell">
      <div className="site-backdrop" aria-hidden="true" />

      <header className="site-header">
        <div className="site-container site-header__inner">
          <NavLink to="/" className="site-brand" aria-label="Joan Chorto Consultor, inicio">
            <img src={jcLogo} alt="Logo JC" className="site-brand__logo" />
            <span className="site-brand__name">Joan Chorto Consultor</span>
          </NavLink>

          <nav className="site-nav" aria-label="Navegación principal">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `site-nav__link${isActive ? ' is-active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

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
