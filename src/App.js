import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import SolutionsPage from './pages/SolutionsPage';
import ConsultingPage from './pages/ConsultingPage';
import ContactPage from './pages/ContactPage';
import './site.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/projectes" element={<ProjectsPage />} />
          <Route path="/soluciones" element={<SolutionsPage />} />
          <Route path="/solucions" element={<SolutionsPage />} />
          <Route path="/consultoria" element={<ConsultingPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/contacte" element={<ContactPage />} />
        </Route>

        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
