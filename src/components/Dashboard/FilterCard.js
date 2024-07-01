import React from 'react';
import './Dashboard.css';

const FilterCard = ({ filters, onFilterChange }) => {
  return (
    <div className="filter-card">
      <h2>Filtros</h2>
      <label htmlFor="title">Buscar por título:</label>
      <input type="text" id="title" placeholder="Ingresar título..." />
      <label htmlFor="author">Buscar por autor:</label>
      <input type="text" id="author" placeholder="Ingresar nombre de autor..." />
      <label htmlFor="category">Filtrar por categoría:</label>
      <select id="category">  {/* Dropdown for category selection */}
        <option value="">Seleccionar categoría</option>
        <option value="fiction">Ficción</option>
        <option value="non-fiction">No Ficción</option>
        <option value="Poetry">Poesia</option>
        <option value="Love">Amor</option>
        <option value="Fantasy">Fantasia</option>
        {/* Add more category options as needed */}
      </select>
    </div>

  );
};

export default FilterCard;
