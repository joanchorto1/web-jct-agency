import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
