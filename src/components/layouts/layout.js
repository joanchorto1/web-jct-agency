import React from 'react';
import Header from '../components/header';
import logoImage from '../img/LOGO(Fondo Transparent).png';

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <footer className="pt-5 bg-dark text-white pb-3">
      <div className="container d-flex align-items-center justify-content-between pb-3">
        <div className="col-md-3 w-25">
          <img className="navbar-logo w-50" src={logoImage} alt="Logo JCT Agency" />
        </div>
        <div className="col-md-3 w-25">
          <h5>Contacto</h5>
          <p>Dirección: Online</p>
          <p>Email: joan@jctagency.com</p>
          <p>Teléfono: 633 391 411</p>
        </div>
      </div>
      <div className="text-center">
        <p>© 2024 JCT Agency.</p>
      </div>
    </footer>
  </>
);

export default Layout;
