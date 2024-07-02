import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import SearchBar from './SearchBar'; // Asumiendo que SearchBar está en el mismo directorio
import BookCard from './BookCard'; // Asumiendo que tienes un componente BookCard

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
        // Asumiendo que los libros están en la propiedad $values
        setBooks(data.$values);
        setSearchResults(data.$values); // Inicialmente mostrar todos los libros
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

  // Función para manejar la búsqueda de libros
  const handleSearch = (searchTerm) => {
    const filteredBooks = books.filter(book =>
      book.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.Author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.Category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredBooks);
  };

  // Función para filtrar libros por categoría seleccionada
  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="book-section">
      <h2>Libros</h2>

      {/* Renderiza el componente SearchBar y pasa la función handleSearch */}
      <SearchBar onSearch={handleSearch} />

      <div className="book-grid">
        {/* Mostrar libros filtrados por categoría o búsqueda */}
        {searchResults
          .filter(book => selectedCategory === '' || book.Category === selectedCategory)
          .map((book) => (
            <BookCard key={book.Id} book={book} />
          ))}
        {/* Mensaje si no hay libros encontrados */}
        {searchResults.length === 0 && <p>No se encontraron libros.</p>}
      </div>
    </div>
  );
};

export default BookSection;
