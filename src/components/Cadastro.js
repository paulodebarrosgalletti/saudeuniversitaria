import React, { useState, useContext } from 'react';
import { AuthProvider } from './AuthContext';
import { AuthContext } from './AuthContext';

const Cadastro = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleCadastro = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8081/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
      alert('Cadastro realizado com sucesso!');
      setIsAuthenticated(true);
    } else {
      alert('Falha no cadastro, tente novamente.');
    }
  };

  return (
    <div className="geral_menu_cadastro">
      <h2>Cadastro</h2>
      <form onSubmit={handleCadastro}>
        <div className="input-group">
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="input-group">
          <button type="submit">Cadastro</button>
        </div>
      </form>
    </div>
  );
};

export default Cadastro;
