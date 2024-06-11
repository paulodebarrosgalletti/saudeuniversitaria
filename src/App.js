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
import ChooseRole from './components/ChooseRole';
import Patient from './components/Patient';
import Doctor from './components/Doctor';
import './App.css';
import { DoctorsProvider } from './components/DoctorsContext';
import { AuthProvider } from './components/AuthContext';

function App() {
  return (
    <AuthProvider>
      <DoctorsProvider>
        <Router>
          <div className="App">
            <NavBarTop />
            <NavBarBottom />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/choose-role" element={<ChooseRole />} />
              <Route path="/patient" element={<Patient />} />
              <Route path="/doctor" element={<Doctor />} />
            </Routes>
          </div>
        </Router>
      </DoctorsProvider>
    </AuthProvider>
  );
}

export default App;
