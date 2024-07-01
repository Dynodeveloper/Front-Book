import './login.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'; // Import useState for form state

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Implement login logic here, potentially calling your ASP.NET backend

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login clicked! Email:', email, 'Password:', password); // Placeholder for now
  };

  return (
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
        <button type="submit"> <Link to="/dashboard">Iniciar sesión</Link></button>
      </form>
      <p>
        ¿Aún no tienes cuenta?{' '}
        <Link to="/register">Regístrate aquí</Link>
      </p>
    </div>
  );
};

export default LoginForm;
