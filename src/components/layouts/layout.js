import React from 'react';
import Header from '../components/header';
import logoImage from '../img/LOGO(Fondo Transparent).png';

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <footer className="bg-primary text-white py-4">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
        <div className="mb-3 mb-md-0">
          <img src={logoImage} alt="Logo JCT Agency" style={{ height: '40px' }} />
        </div>
        <div className="text-center">
          <p className="mb-1">© 2024 JCT Agency – Solucions digitals i software SaaS.</p>
          <p className="mb-1">Email: joan@jctagency.com | Telèfon: 633 391 411</p>
          <p className="mb-0">Segueix-nos a LinkedIn</p>
        </div>
      </div>
    </footer>
  </>
);

export default Layout;
