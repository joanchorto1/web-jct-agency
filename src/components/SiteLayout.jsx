import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
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
            <span className="site-brand__mark">JC</span>
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
            Reserva una sesión
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
              <span className="site-brand__mark">JC</span>
              <span className="site-brand__name">Joan Chorto Consultor</span>
            </div>
            <p>
              Consultoría empresarial para pymes industriales, construcción y servicios. Transformación operativa con
              foco en resultados medibles.
            </p>
          </div>
          <div className="site-footer__contact">
            <a href="mailto:joan@joanchorto.com">joan@joanchorto.com</a>
            <a href="tel:+34633391411">+34 633 391 411</a>
            <span>Barcelona · Consultoría para toda España</span>
          </div>
        </div>
      </footer>

      <a href="/contacto#reserva" className="site-fixed-cta">
        Reserva una sesión
      </a>
    </div>
  );
}

export default SiteLayout;
