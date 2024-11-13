import React from 'react';

const Profile = ({ name, phone, email, city, photo }) => {
  return (
    <section className="profile">
      <img src={photo} alt="Фото" className="profile-photo" />
      <div className="profile-info">
        <p><strong>ФИО:</strong> {name}</p>
        <p><strong>Телефон:</strong> {phone}</p>
        <p><strong>Электронная почта:</strong> {email}</p>
        <p><strong>Город проживания:</strong> {city}</p>
      </div>
    </section>
  );
};

export default Profile;
