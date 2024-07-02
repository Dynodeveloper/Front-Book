import React from 'react';
import { Link } from 'react-router-dom';
import ProfileImage from './profileimage';

const ProfileCard = ({ user }) => {
  const { name, email, image, reviews } = user; // Destructure user data

  return (

    <div className="profile-card">
      <img src='https://i.pinimg.com/236x/29/9f/21/299f21837fc60d6157c14a1e38978179.jpg'  className="profile-picture" />
      <div className="profile-info">
        <h2>{name}</h2>
        <p>Email: {email}</p>
        {/* Display reviews section (implement based on reviews data structure) */}
        <div className="reviews">
          <h3>Reseñas</h3>
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <p key={review.id}>{review.content}</p> // Replace with review details
            ))
          ) : (
            <p>Aún no has escrito reseñas.</p>
          )}
        </div>
        <button><Link to="/Reset">Restablecer contraseña</Link></button>
      </div>
    </div>
  );
};

export default ProfileCard;
