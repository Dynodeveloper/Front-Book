import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Asumiendo que tienes un archivo de estilo para BookCard

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.image || 'default-image.jpg'} alt={book.Title} /> {/* Agrega una imagen por defecto si es necesario */}
      <div className="book-details">
        <h3>{book.Title}</h3>
        <p>by {book.Author}</p>
        <p>Category: {book.Category}</p>
      </div>
      <div className="book-actions">
        <button><Link to="/review">Escribir reseña</Link></button>
        <button><Link to="/more">Ver más</Link></button>
      </div>
    </div>
  );
};

export default BookCard;
