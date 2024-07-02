import './login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginData = {
      email: email,
      password: password
    };

    try {
      const response = await axios.post('http://localhost:5017/api/login', loginData);

      if (response.status === 200) {
        console.log('Login successful!', response.data);
        localStorage.setItem('token', response.data.token);
        window.location.href = '/dashboard';
      } else {
        console.error('Login failed:', response.data);
        setError('Usuario o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Error al intentar iniciar sesión. Por favor, intenta de nuevo más tarde.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Bienvenido</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Iniciar sesión</button>
        </form>
        <p>
          ¿Aún no tienes cuenta?{' '}
          <Link to="/register">Regístrate aquí</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
