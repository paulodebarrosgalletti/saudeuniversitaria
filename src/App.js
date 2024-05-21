
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBarTop from './components/NavBarTop';
import NavBarBottom from './components/NavBarBottom';
/*import Banner from './components/Banner';*/
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
/*import Footer from './components/Footer';*/
import Faq from './components/Faq';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBarTop />
        <NavBarBottom />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={<Login />} /> {/* Defina a rota para o componente Login */}
          <Route path="/cadastro" element={<Cadastro />} /> {/* Defina a rota para o componente Cadastro */}
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
