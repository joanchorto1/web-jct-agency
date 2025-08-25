import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/components/home";
import Contact from "./components/components/contact";
import Avero from "./components/components/avero";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/avero' element={<Avero/>}/>
          <Route path='/contacto' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
