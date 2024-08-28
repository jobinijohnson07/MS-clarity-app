import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const UserCard = ({ user }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      anime({
        targets: cardRef.current,
        scale: [0.8, 1],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 800,
      });
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="max-w-xs overflow-hidden shadow-lg my-2 bg-white hover:shadow-xl transition-shadow duration-300 mx-5 rounded-lg"
    >
      <img className="w-full h-32 object-cover" src={user.image} alt={user.name} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{user.name}</h2>
        <p className="text-gray-700 text-base">{user.gender}</p>
        <p className="text-gray-700 text-base">{user.jobTitle}</p>
      </div>
    </div>
  );
};

export default UserCard;
