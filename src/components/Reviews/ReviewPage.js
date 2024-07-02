import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Review.css';

const ReviewForm = ({ bookId }) => {
  const [rating, setRating] = useState(1); // Estado para almacenar el rating, inicializado en 1 estrella
  const [content, setContent] = useState(''); // Estado para almacenar el contenido de la reseña
  const [message, setMessage] = useState('');

  // Función para manejar cambios en el rating
  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value)); // Convertir a número entero
  };

  // Función para manejar cambios en el contenido de la reseña
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  // Función para enviar la reseña al servidor
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Objeto con los datos de la reseña
      const reviewData = {
        bookId: bookId,
        rating: rating,
        content: content
      };

      // Envío de la solicitud POST al servidor
      const response = await axios.post('http://localhost:5017/api/review', reviewData);

      setMessage('Reseña creada exitosamente.');
      // Aquí puedes redirigir o realizar otras acciones después de crear la reseña

    } catch (error) {
      console.error('Error al crear la reseña:', error);
      setMessage('Error al crear la reseña. Por favor, intenta nuevamente.');
      // Manejar el error, mostrar un mensaje al usuario, etc.
    }
  };

  return (
    <div className="review-form">
      <Link to="/" className="back-button">
        <p><strong>Volver a inicio</strong></p>
      </Link>
      <h2>Escribe tu reseña</h2>
      <form onSubmit={handleSubmit}>
        {/* Selección de rating */}
        <label>Rating:</label>
        <select value={rating} onChange={handleRatingChange}>
          {[...Array(5)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1} estrella{index !== 0 && 's'}
            </option>
          ))}
        </select>

        {/* Caja de texto para el contenido de la reseña */}
        <label>Contenido:</label>
        <textarea
          value={content}
          onChange={handleContentChange}
          placeholder="Escribe tu reseña aquí..."
          required
        />

        {/* Botón para enviar la reseña */}
        <button type="submit">Enviar reseña</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ReviewForm;
