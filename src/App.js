import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SiteLayout from './components/SiteLayout';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import SolutionsPage from './pages/SolutionsPage';
import ConsultingPage from './pages/ConsultingPage';
import ContactPage from './pages/ContactPage';
import ServiceDetailPage from './pages/services/ServiceDetailPage';
import ProjectDetailPage from './pages/projects/ProjectDetailPage';
import './site.css';

function ScrollAnimator() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 40,
      easing: 'ease-out-cubic',
    });
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollAnimator />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/projectes" element={<ProjectsPage />} />
          <Route path="/soluciones" element={<SolutionsPage />} />
          <Route path="/solucions" element={<SolutionsPage />} />
          <Route path="/soluciones/:slug" element={<ServiceDetailPage />} />
          <Route path="/solucions/:slug" element={<ServiceDetailPage />} />
          <Route path="/consultoria" element={<ConsultingPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/contacte" element={<ContactPage />} />
          <Route path="/proyectos/:slug" element={<ProjectDetailPage />} />
          <Route path="/projectes/:slug" element={<ProjectDetailPage />} />
        </Route>

        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
