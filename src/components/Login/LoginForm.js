import './login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react'; // Import useState for form state

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare login data object
    const loginData = {
      email: email,
      password: password
    };

    try {
      const response = await axios.post('http://localhost:5017/api/login', loginData);

      if (response.status === 200) {
        console.log('Login successful!', response.data);
        localStorage.setItem('token', response.data.token);
        window.location.href = '/dashboard'; // Redirect to dashboard on successful login
      } else {
        console.error('Login failed:', response.data);
        setError('Usuario o contraseña incorrectos'); // Set error message for incorrect login
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Error al intentar iniciar sesión. Por favor, intenta de nuevo más tarde.'); // Set error message for other errors
    }
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
        {error && <p className="error-message">{error}</p>} {/* Display error message if there's an error */}
        <button type="submit">Iniciar sesión</button>
      </form>
      <p>
        ¿Aún no tienes cuenta?{' '}
        <Link to="/register">Regístrate aquí</Link>
      </p>
    </div>
  );
};

export default LoginForm;
