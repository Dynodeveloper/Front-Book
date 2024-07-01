import RegistrationImage from './RegistrationImage'
import { Link } from 'react-router-dom';
import './Registration.css';

import React, { useState } from 'react'; // Import useState for form state

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Implement registration logic here, potentially calling your ASP.NET backend

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Registration clicked! Name:', name, 'Email:', email, 'Password:', password); // Placeholder for now
  };

  return (
    <div className="registration-page">
      <RegistrationImage /> {/* Component for the image */}
      <div className="registration-form">
        <h1>Crea tu cuenta</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre completo:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <label htmlFor="confirmPassword">Confirmar contraseña:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit"><Link to="/">Registrarse</Link></button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
