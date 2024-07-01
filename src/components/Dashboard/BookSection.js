import React from 'react';
import './Dashboard.css';
import BookCard from './BookCard'; // Assuming BookCard component import

const BookSection = ({ books }) => {
  return (
    <div className="book-section">
      <h2>Libros</h2>
      <div className="book-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} /> // Render each book with key
        ))}
      </div>
    </div>
  );
};

export default BookSection;
