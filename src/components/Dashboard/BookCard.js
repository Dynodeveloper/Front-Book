import React from 'react';
import './Dashboard.css';

const BookCard = ({ book }) => {
  const { image, title, author, category } = book; // Destructure book data

  return (
    <div className="book-card">
      <img src={image} alt={title} />
      <div className="book-details">
        <h3>{title}</h3>
        <p>by {author}</p>
        <p>Category: {category}</p>
      </div>
      <div className="book-actions">
        <button>Escribir reseña</button>
        <button>Ver más</button>
      </div>
    </div>
  );
};

export default BookCard;
