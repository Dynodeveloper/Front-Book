import React from 'react';
import './Dashboard.css';

const FilterCard = ({ filters, onFilterChange }) => {
  return (
    <div className="filter-card">
      <h2>Filtros</h2>
      
      <label htmlFor="category">Filtrar por categoría:</label>
      <select id="category" onChange={(e) => onFilterChange(e.target.value)}>
        {/* Dropdown for category selection */}
        <option value="">Seleccionar categoría</option>
        {/* Map over the filters (categories) array */}
        {filters.map((category, index) => (
          <option key={index} value={category.name}>{category.name}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterCard;
