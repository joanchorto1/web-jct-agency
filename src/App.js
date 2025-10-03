import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from "./components/components/home";
import Contact from "./components/components/contact";

import Avero from "./components/components/avero";
import Blog from "./components/components/blog";
import SeoArticle from "./components/components/blog/seo";
import SoftwareArticle from "./components/components/blog/software";
import DigitalitzarPimeArticle from "./components/components/blog/digitalitzar-pime";
import VerifactuGestoriesArticle from "./components/components/blog/verifactu-gestories";
import SaasVsTradicionalArticle from "./components/components/blog/saas-vs-tradicional";
import Pressupost from "./components/components/pressupost";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "./i18n";

const RedirectToPreferredLanguage = () => {
  const location = useLocation();
  let storedLanguage = DEFAULT_LANGUAGE;
  if (typeof window !== 'undefined') {
    const fromStorage = window.localStorage.getItem('preferredLanguage');
    if (fromStorage && SUPPORTED_LANGUAGES.includes(fromStorage)) {
      storedLanguage = fromStorage;
    }
  }

  const targetPath = `/${storedLanguage}${location.pathname === '/' ? '' : location.pathname}${location.search}${location.hash}`;
  return <Navigate to={targetPath} replace />;
};

const LocalizedRoutes = () => {
  const { lang } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (!lang || !SUPPORTED_LANGUAGES.includes(lang)) {
      let targetLanguage = DEFAULT_LANGUAGE;
      if (typeof window !== 'undefined') {
        const stored = window.localStorage.getItem('preferredLanguage');
        if (stored && SUPPORTED_LANGUAGES.includes(stored)) {
          targetLanguage = stored;
        }
      }

      const suffix = location.pathname.split('/').slice(2).join('/');
      const redirectPath = `/${targetLanguage}${suffix ? `/${suffix}` : ''}${location.search}${location.hash}`;
      navigate(redirectPath, { replace: true });
      return;
    }

    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }

    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang, i18n, navigate, location]);

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='avero' element={<Avero />} />
      <Route path='contacto' element={<Contact />} />
      <Route path='blog' element={<Blog />} />
      <Route path='blog/optimitzacio-seo' element={<SeoArticle />} />
      <Route path='blog/software-a-mida-beneficis' element={<SoftwareArticle />} />
      <Route path='blog/digitalitzar-pime' element={<DigitalitzarPimeArticle />} />
      <Route path='blog/verifactu-gestories' element={<VerifactuGestoriesArticle />} />
      <Route path='blog/saas-vs-tradicional' element={<SaasVsTradicionalArticle />} />
      <Route path='pressupost' element={<Pressupost />} />
    </Routes>
  );
};

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/:lang/*' element={<LocalizedRoutes />} />
        <Route path='*' element={<RedirectToPreferredLanguage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
