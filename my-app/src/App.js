// src/App.js
import React from 'react';
import PetProfile from './components/PetProfile';

const App = () => {
  const petData = {
    name: "Барсик",
    species: "Кот",
    age: 3,
    favoriteFood: "Рыба",
    description: "Барсик — очень ласковый кот, любит ссать в тапки.",
    photo: "https://avatars.mds.yandex.net/i?id=f7d97d068f708bff9e4bb6d66df9e1ea_l-4554069-images-thumbs&n=13"
  };

  return (
    <div className="app">
      <h1>Мой домашний любимец</h1>
      <PetProfile {...petData} />
    </div>
  );
};

export default App;
