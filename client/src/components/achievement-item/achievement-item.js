import React from 'react';
import './achievement-item.css';

const AchievementItem = ({ achievementItem: { description, status, image } }) => {
  return (
    <div className='achievement-item'>
      <button className={`achievement-item__button ${status === 'SUCCESS' ? 'achievement-item__button--done' : ''}`}>
        <img className='achievement-item__image' src={image} alt='achievement image' />
      </button>
      <p className='achievement-item__description'>{description}</p>
    </div>
  );
};

export default AchievementItem;
