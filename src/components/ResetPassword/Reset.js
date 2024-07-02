import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Reset.css'; // Asegúrate de tener un archivo de estilo para ResetPassword

const ResetPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [emailValidated, setEmailValidated] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleEmailSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5017/api/reset-password', { email });
      setMessage('Correo validado. Por favor, ingrese su nueva contraseña.');
      setEmailValidated(true);
    } catch (error) {
      console.error('Error al validar el correo:', error);
      setMessage('Correo no encontrado. Por favor, intente de nuevo.');
    }
  };

  const handlePasswordSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Las contraseñas no coinciden.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5017/api/reset-password', { email, password });
      setMessage('Su contraseña ha sido restablecida exitosamente.');
    } catch (error) {
      console.error('Error al restablecer la contraseña:', error);
      setMessage('Hubo un error al restablecer su contraseña. Por favor, intente de nuevo.');
    }
  };

  return (
    <div className="reset-password-form">
      <div className="back-button">
        <p><Link to="/">Volver  inicio De Sesion</Link></p>
      </div>
      <h2>Restablecer Contraseña</h2>
      {!emailValidated ? (
        <form onSubmit={handleEmailSubmit}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Ingrese su correo electrónico"
            required
          />
          <button type="submit">Validar correo</button>
        </form>
      ) : (
        <form onSubmit={handlePasswordSubmit}>
          <label>Nueva Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Ingrese su nueva contraseña"
            required
          />
          <label>Confirmar Nueva Contraseña:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Confirme su nueva contraseña"
            required
          />
          <button type="submit">Restablecer Contraseña</button>
        </form>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPasswordForm;
