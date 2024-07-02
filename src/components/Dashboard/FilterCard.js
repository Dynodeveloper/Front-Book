import React from 'react';
import './Dashboard.css';

const FilterCard = ({ filters, onFilterChange }) => {
  return (
    <div className="filter-card">
      <h2>Filtros</h2>
      
      <label htmlFor="category">Filtrar por categoría:</label>
      <select 
        id="category" 
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="">Seleccionar categoría</option>
        {filters.map(filter => (
          <option key={filter.Id} value={filter.Name}>
            {filter.Name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterCard;
