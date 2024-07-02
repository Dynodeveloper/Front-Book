import React from 'react';
import './profile.css';

const ProfileImage = () => { // PascalCase para el nombre del componente
  return (
    <div className="profile-image">
      {/* Insert your image here */}
      <img src="https://i.pinimg.com/236x/29/9f/21/299f21837fc60d6157c14a1e38978179.jpg" alt="Profile" />
    </div>
  );
};

export default ProfileImage;
