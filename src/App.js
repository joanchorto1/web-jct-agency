import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/components/home";
import Contact from "./components/components/contact";
import Blog from "./components/components/blog";
import SeoArticle from "./components/components/blog/seo";
import SoftwareArticle from "./components/components/blog/software";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contacto' element={<Contact/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/blog/optimitzacio-seo' element={<SeoArticle/>}/>
          <Route path='/blog/software-a-mida-beneficis' element={<SoftwareArticle/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
