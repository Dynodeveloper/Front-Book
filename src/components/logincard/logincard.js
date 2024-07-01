import React, { useState } from 'react'; // Import useState for handling form state

const LoginCard = () => {
  const [username, setUsername] = useState(''); // State variable for username
  const [password, setPassword] = useState(''); // State variable for password

  const handleSubmit = (event) => {
    event.preventDefault(); 
    // Implement login logic here, potentially calling your ASP.NET backend
    console.log('Login clicked! Username:', username, 'Password:', password); // Placeholder for now
  };

  return (
    <div className='Card'>
      <h1>Bienvenido</h1>
      <h2>Ingrese sus credenciales</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default LoginCard;
