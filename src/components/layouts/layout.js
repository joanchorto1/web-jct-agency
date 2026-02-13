import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import InlineCTAGroup from '../cta/InlineCTAGroup';
import StickyReservationButton from '../cta/StickyReservationButton';
import logoImage from '../img/joan-chorto-consultor-logo.svg';
import '../styles/Layout.css';

const Layout = ({ children, stickyVisibility = 'all' }) => {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth >= 992 : true,
  );

  useEffect(() => {
    if (stickyVisibility !== 'desktop-only') {
      return undefined;
    }

    const updateViewport = () => {
      setIsDesktop(window.innerWidth >= 992);
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, [stickyVisibility]);

  const shouldShowSticky =
    stickyVisibility === 'all' || (stickyVisibility === 'desktop-only' && isDesktop);

  return (
    <>
      <Header />
      <div className="layout-shell">
        <main className="layout-main">{children}</main>
        <section className="layout-cta-band section-spacing">
          <div className="container narrow-container text-center text-lg-start">
            <h2 className="fw-bold mb-3">Pren avantatge amb una estratègia digital accionable</h2>
            <p className="text-muted mb-4">
              Fem servir auditories d'ecosistema, tallers d'alineació i prototips ràpids per detectar on generar més
              impacte. Explica'ns què vols assolir i et preparem un pla en menys d'una setmana.
            </p>
            <InlineCTAGroup className="justify-content-center justify-content-lg-start" />
          </div>
        </section>
        <footer className="site-footer border-top">
          <div className="container py-5">
            <div className="row gy-4 align-items-center">
              <div className="col-md-6 text-center text-md-start">
                <img src={logoImage} alt="Logotip de Joan Chorto Consultor" className="footer-logo mb-3" />
                <p className="mb-2 fw-semibold">Joan Chorto Consultor — Optimització operativa i automatització real.</p>
                <p className="mb-0 text-muted small">
                  Acompanyo equips directius i operacions perquè simplifiquin processos crítics, connectin sistemes i guanyin
                  control sobre resultats i marges.
                </p>
              </div>
              <div className="col-md-6 text-center text-md-end footer-contact">
                <p className="mb-1">
                  <a href="mailto:joan@jctagency.com" className="fw-semibold">joan@jctagency.com</a>
                </p>
                <p className="mb-1">
                  <a href="tel:+34633391411" className="fw-semibold">633391411</a>
                </p>
                <p className="mb-0 text-muted small">L'Aldea Tarragona 43896</p>
              </div>
            </div>
            <div className="footer-sub text-center text-muted small mt-5 pt-3 border-top">
              © {new Date().getFullYear()} Joan Chorto Consultor. Tots els drets reservats.
            </div>
          </div>
        </footer>
      </div>
      {shouldShowSticky && <StickyReservationButton />}
    </>
  );
};

export default Layout;
