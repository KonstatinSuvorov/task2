import React from 'react';

const PetProfile = ({ name, species, age, favoriteFood, description, photo }) => {
  return (
    <div className="pet-profile">
      <img src={photo} alt={`${name}`} className="pet-photo" />
      <div className="pet-info">
        <h2>{name}</h2>
        <p><strong>Вид:</strong> {species}</p>
        <p><strong>Возраст:</strong> {age} лет</p>
        <p><strong>Любимая еда:</strong> {favoriteFood}</p>
        <p><strong>Описание:</strong> {description}</p>
      </div>
    </div>
  );
};

export default PetProfile;
