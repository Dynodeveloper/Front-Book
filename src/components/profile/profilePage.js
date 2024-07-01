import ProfileCard from './profileCard';
import { Link } from 'react-router-dom';
import React from 'react';
import './profile.css'

const ProfilePage = () => {
  // Fetch or retrieve user data
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
    reviews: [
      { id: 1, content: 'This book was great!' },
      // Add more reviews if needed
    ],
  };

  return (
    <div className="profile-page">
      <div className='top-profile'><h1>Tu perfil     <Link to="/dashboard">Volver</Link></h1></div>
      
      <ProfileCard user={user} />
    </div>
  );
};

export default ProfilePage;
