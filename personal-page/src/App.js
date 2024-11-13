
import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Footer from './components/Footer';

const App = () => {
  const personalData = {
    name: "Иван Иванов",
    phone: "+7 123 456 7890",
    email: "ivan.ivanov@example.com",
    city: "Москва",
    photo: "https://avatars.mds.yandex.net/i?id=8c813994660b2c27c6b9d5d8014989d8_l-4909082-images-thumbs&n=13",
    skills: ["JavaScript", "React", "HTML", "CSS"]
  };

  return (
    <div className="app">
      <Header />
      <Profile {...personalData} />
      <Skills skills={personalData.skills} />
      <Footer />
    </div>
  );
};

export default App;
