import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'; // Asumiendo que SearchBar está en el mismo directorio

const BookSection = () => {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Función para obtener libros
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:5017/api/Books');
        const data = await response.json();
        setBooks(data);
        setSearchResults(data); // Inicialmente mostrar todos los libros
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };


    // Función para obtener categorías
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:5017/api/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    // Llama a las funciones de obtención de libros y categorías al montar el componente
    fetchBooks();
    fetchCategories();
  }, []);
  const handleSearch = (searchTerm) => {
    const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredBooks);
  };

  // Función para filtrar libros por categoría seleccionada
  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    // Puedes implementar la lógica para filtrar libros según la categoría seleccionada aquí
  };

  // Función para manejar la búsqueda de libros


  return (
    <div className="book-section">
      <h2>Libros</h2>

      {/* Renderiza el componente SearchBar y pasa la función handleSearch */}
      <SearchBar onSearch={handleSearch} />

      <div className="book-grid">
        {/* Mostrar libros filtrados por categoría o búsqueda */}
        {searchResults
          .filter(book => selectedCategory === '' || book.category === selectedCategory)
          .map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.image} alt={book.title} />
              <div className="book-details">
                <h3>{book.title}</h3>
                <p>by {book.author}</p>
                <p>Category: {book.category}</p>
              </div>
              <div className="book-actions">
                <button><Link to="/review">Escribir reseña</Link></button>
                <button><Link to="/more">Ver más</Link></button>
              </div>
            </div>
          ))}
        {/* Mensaje si no hay libros encontrados */}
        {searchResults.length === 0 && <p>No se encontraron libros.</p>}
      </div>
    </div>
  );
};

export default BookSection;
