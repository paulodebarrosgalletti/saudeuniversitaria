import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8081/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const { token } = await response.json();
      localStorage.setItem('token', token);
      alert('Login realizado com sucesso!');
    } else {
      alert('Falha no login, verifique suas credenciais.');
    }
  };

  return (
    <div class="geral_menu_login">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div class="input-group">
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div class="input-group">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div class="input-group">
        <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;