// src/components/NavBarBottom.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavBarBottom() {
  return (
    <div className="nav-bar-bottom">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Assistentes Universitários</Link></li>
        <li><Link to="/contact">Feedback dos Usuários</Link></li>
        <li><Link to="/faq">Perguntas e Respostas (FAQ)</Link></li>
      </ul>
    </div>
  );
}

export default NavBarBottom;
