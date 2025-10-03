import './App.css';
import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './components/components/home';
import Contact from './components/components/contact';
import Avero from './components/components/avero';
import Blog from './components/components/blog';
import SeoArticle from './components/components/blog/seo';
import SoftwareArticle from './components/components/blog/software';
import DigitalitzarPimeArticle from './components/components/blog/digitalitzar-pime';
import VerifactuGestoriesArticle from './components/components/blog/verifactu-gestories';
import SaasVsTradicionalArticle from './components/components/blog/saas-vs-tradicional';
import Pressupost from './components/components/pressupost';




const HomePage = lazy(() => import('./pages/Home'));
const SectorsPage = lazy(() => import('./pages/Sectors'));
const SolutionsPage = lazy(() => import('./pages/Solutions'));
const ResultsPage = lazy(() => import('./pages/Results'));
const AboutPage = lazy(() => import('./pages/About'));
const WorkMethodPage = lazy(() => import('./pages/WorkMethod'));
const ResourcesPage = lazy(() => import('./pages/Resources'));
const ContactReservationPage = lazy(() => import('./pages/ContactReservation'));

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
        <Route path='/' element={<Home/>}/>
        <Route path='/avero' element={<Avero/>}/>
        <Route path='/contacto' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blog/optimitzacio-seo' element={<SeoArticle/>}/>
        <Route path='/blog/software-a-mida-beneficis' element={<SoftwareArticle/>}/>
        <Route path='/blog/digitalitzar-pime' element={<DigitalitzarPimeArticle/>}/>
        <Route path='/blog/verifactu-gestories' element={<VerifactuGestoriesArticle/>}/>
        <Route path='/blog/saas-vs-tradicional' element={<SaasVsTradicionalArticle/>}/>
        <Route path='/pressupost' element={<Pressupost/>}/>
        <Route path='/resultats' element={<ResultsPage/>}/>
      </Routes>


      <Suspense fallback={<div className="page-loading">Carregant la nova experiència...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sectors" element={<SectorsPage />} />
          <Route path="/solucions" element={<SolutionsPage />} />
          <Route path="/resultats" element={<ResultsPage />} />
          <Route path="/sobre-jct" element={<AboutPage />} />
          <Route path="/com-treballem" element={<WorkMethodPage />} />
          <Route path="/recursos" element={<ResourcesPage />} />
          <Route path="/contacte" element={<ContactReservationPage />} />
          <Route path="/contacto" element={<ContactReservationPage />} />
          <Route path="/avero" element={<Avero />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/optimitzacio-seo" element={<SeoArticle />} />
          <Route path="/blog/software-a-mida-beneficis" element={<SoftwareArticle />} />
          <Route path="/blog/digitalitzar-pime" element={<DigitalitzarPimeArticle />} />
          <Route path="/blog/verifactu-gestories" element={<VerifactuGestoriesArticle />} />
          <Route path="/blog/saas-vs-tradicional" element={<SaasVsTradicionalArticle />} />
          <Route path="/pressupost" element={<Pressupost />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
