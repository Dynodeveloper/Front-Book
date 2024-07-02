import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';

const BookCard = ({ book }) => {
  const { ImageUrl, title, author, category } = book;
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    async function fetchBookData() {
      try {
        const response = await axios.get('http://localhost:5017/api/Books');
        setBookData(response.data); // Asigna los datos recibidos a bookData
      } catch (error) {
        console.error('Error al obtener datos del servidor:', error);
      }
    }

    fetchBookData();
  }, []); // Este efecto se ejecuta una sola vez al montar el componente

  if (!bookData) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="book-card">
      <img src={ImageUrl} alt={title} />
      <div className="book-details">
        <h3>{title}</h3>
        <p>by {author}</p>
        <p>Category: {category}</p>
      </div>
      <div className="book-actions">
        <button><Link to="/review">Escribir reseña</Link></button>
        <button>Ver más</button>
      </div>
    </div>
  );
};

export default BookCard;
