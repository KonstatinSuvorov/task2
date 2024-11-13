import React from 'react';

// Функциональный компонент для отображения информации о фильме
const Movie = ({ title, director, year, studio, poster }) => {
  return (
    <div className="movie">
      <h1>{title}</h1>
      <p><strong>Режиссер:</strong> {director}</p>
      <p><strong>Год выпуска:</strong> {year}</p>
      <p><strong>Киностудия:</strong> {studio}</p>
      <img src={poster} alt={title} style={{ width: '200px', height: 'auto' }} />
    </div>
  );
};

export default Movie;
