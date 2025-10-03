import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoImage from '../img/LOGO JCTAGENCY.png';
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '../../i18n';

const Header = () => {
  const { t } = useTranslation();
  const { lang: currentLang } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const activeLanguage = currentLang && SUPPORTED_LANGUAGES.includes(currentLang)
    ? currentLang
    : DEFAULT_LANGUAGE;

  const buildPath = (path = '') => `/${activeLanguage}${path ? `/${path}` : ''}`;

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    if (newLanguage === activeLanguage) return;

    const segments = location.pathname.split('/').filter(Boolean);
    const remainder = segments.slice(1).join('/');
    const nextPath = `/${newLanguage}${remainder ? `/${remainder}` : ''}`;
    navigate(`${nextPath}${location.search}${location.hash}`);
  };

  return (
    <Navbar expand="lg" className="navbar-custom shadow-sm py-3" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to={buildPath('')}>
          <img src={logoImage} alt={t('common.brandAlt')} className="rounded-circle" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link as={Link} to={buildPath('')}>
              {t('navigation.home')}
            </Nav.Link>
            <Nav.Link as={Link} to={buildPath('avero')}>
              {t('navigation.avero')}
            </Nav.Link>
            <Nav.Link as={Link} to={buildPath('blog')}>
              {t('navigation.blog')}
            </Nav.Link>
            <Nav.Link as={Link} to={buildPath('pressupost')}>
              {t('navigation.quote')}
            </Nav.Link>
            <Nav.Link as={Link} to={buildPath('contacto')}>
              {t('navigation.contact')}
            </Nav.Link>
            <div className="ms-lg-3 mt-3 mt-lg-0">
              <label htmlFor="language-selector" className="visually-hidden">
                {t('language.label')}
              </label>
              <select
                id="language-selector"
                className="form-select form-select-sm"
                value={activeLanguage}
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lng) => (
                  <option key={lng} value={lng}>
                    {t(`language.options.${lng}`)}
                  </option>
                ))}
              </select>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
