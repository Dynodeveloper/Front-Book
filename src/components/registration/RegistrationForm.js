import React, { useState } from 'react';
import axios from 'axios';
import './Registration.css'; // Importa tu archivo de estilos CSS

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const registerData = {
      username: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    };
  
    try {
      const response = await axios.post('http://localhost:5017/api/register', registerData);
  
      if (response.status === 201) {
        console.log('Usuario registrado exitosamente:', response.data);
        // Manejar redirección o acciones adicionales después del registro exitoso
      } else {
        console.error('Error al registrar usuario:', response);
        // Manejar errores adicionales si es necesario
      }
    } catch (error) {
      if (error.response) {
        console.error('Error de validación:', error.response.data);
        // Mostrar mensajes de error al usuario basados en error.response.data
      } else {
        console.error('Error durante la solicitud:', error.message);
        // Mostrar mensajes de error genéricos al usuario
      }
    }
  };

  return (
    <div className="registration-page">
      <div className="registration-form">
        <h1>Registro de Usuario</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit">Registrarse</button>
        </form>
      </div>
      <div className="registration-image"></div>
    </div>
  );
};

export default RegistrationForm;
