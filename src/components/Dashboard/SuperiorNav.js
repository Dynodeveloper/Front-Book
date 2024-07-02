import React from 'react';
import { Link } from 'react-router-dom';
import ProfileImage from '../profile/profileimage'; // Importa el componente con PascalCase
import './Dashboard.css';  // Suponiendo que este archivo contiene estilos para SuperiorNav

const SuperiorNav = () => {
  return (
    <nav className="superior-nav">
      <ProfileImage /> {/* Renderiza el componente ProfileImage */}
      <p><Link to="/perfil">Perfil</Link></p>
      <p><Link to="/about">Acerca de</Link></p>
      <p><Link to="/">Cerrar sesión</Link></p>
      {/* Otros enlaces de navegación o botones aquí */}
    </nav>
  );
};

export default SuperiorNav;
