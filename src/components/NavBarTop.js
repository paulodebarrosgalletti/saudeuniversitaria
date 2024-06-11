import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Atualize aqui para importar useNavigate
import { AuthProvider } from './AuthContext';
import { AuthContext } from './AuthContext';

function NavBarTop() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate(); // Atualize aqui para usar useNavigate

  const handleLogout = () => {
    logout();
    navigate('/login'); // Atualize aqui para usar navigate
  };

  const handleAccess = () => {
    navigate('/choose-role'); // Atualize aqui para usar navigate
  };

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
          {isAuthenticated ? (
            <>
              <li><div className="avatar">👤</div></li>
              <li><button className="acessar" onClick={handleAccess}>Acessar</button></li>
              <li><button className="logout" onClick={handleLogout}>Sair</button></li>
            </>
          ) : (
            <>
              <li><button className="login"><Link to="/login">LOGIN</Link></button></li>
              <li><button className="cadastro"><Link to="/cadastro">CADASTRO</Link></button></li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default NavBarTop;
