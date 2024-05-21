import React from 'react';
import { Link } from 'react-router-dom';

function NavBarTop() {
  return (
    <div className="nav-bar-top">
      <div className="nav-bar-top-left">
        <div className="logo"><Link to="/">Saúde Universitária</Link></div>
        <div className="barra-pesquisa">
          <input type="text" placeholder="Procurar" />
        </div>
      </div>
      <div className="nav-bar-top-right">
        <ul>
          <li><button className="login"><Link to="/login">LOGIN</Link></button></li>
          <li><button className="cadastro"><Link to="/cadastro">CADASTRO</Link></button></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBarTop;
