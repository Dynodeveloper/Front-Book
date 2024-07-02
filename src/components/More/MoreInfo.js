import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MoreInfo.css'; // Estilos CSS para el componente

const MoreInfo = ({ bookId }) => {
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Función para cargar la información del libro y sus reseñas
    const fetchBookAndReviews = async () => {
      try {
        // Obtener información del libro por su ID
        const bookResponse = await axios.get(`http://localhost:5017/api/Books/${bookId}`);
        setBook(bookResponse.data);

        // Obtener todas las reseñas del libro por su ID
        const reviewsResponse = await axios.get(`http://localhost:5017/api/Review/${bookId}`);
        setReviews(reviewsResponse.data);
      } catch (error) {
        console.error('Error al cargar la información del libro y reseñas:', error);
      }
    };

    // Llamar a la función para cargar la información del libro y sus reseñas al montar el componente
    fetchBookAndReviews();
  }, [bookId]);

  if (!book) {
    return <div>Cargando información del libro...</div>;
  }

  return (
    <div className="more-info">
      <div className="book-details">
        <img src={book.image} alt={`Portada de ${book.title}`} />
        <h2>{book.title}</h2>
        <p>Autor: {book.author}</p>
      </div>
      <div className="reviews">
        <h3>Reseñas:</h3>
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p><strong>Rating:</strong> {review.rating}</p>
              <p><strong>Contenido:</strong> {review.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoreInfo;

