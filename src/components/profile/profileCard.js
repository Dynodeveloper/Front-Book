import React from 'react';

const ProfileCard = ({ user }) => {
  const { name, email, image, reviews } = user; // Destructure user data

  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-picture" />
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
        <button>Restablecer contraseña</button>
      </div>
    </div>
  );
};

export default ProfileCard;
