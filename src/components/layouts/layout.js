import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/header';
import logoImage from '../img/LOGO JCTAGENCY.png';

const Layout = ({ children }) => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main>{children}</main>
      <footer className="footer-custom py-4 mt-auto">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="mb-3 mb-md-0">
            <img src={logoImage} alt={t('layout.footer.logoAlt')} className="rounded-circle" />
          </div>
          <div className="text-center text-md-end">
            <p className="mb-1">{t('layout.footer.copy')}</p>
            <p className="mb-1">{t('layout.footer.contact')}</p>
            <p className="mb-0">{t('layout.footer.follow')}</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
