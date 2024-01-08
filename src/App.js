import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/components/home";
import Contact from "./components/components/contact";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contacto' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
