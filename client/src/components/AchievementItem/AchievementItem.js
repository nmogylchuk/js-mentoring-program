import React from 'react';
import './AchievementItem.scss';

const AchievementItem = ({ achievementItem: { description, status, image } }) => {
  return (
    <li className='achievement-item'>
      <button className={`achievement-item__button ${status === 'SUCCESS' ? 'achievement-item__button--done' : ''}`} aria-label="Center Align">
        <img className='achievement-item__image' src={image} alt='achievement image' />
      </button>
      <p className='achievement-item__description'>{description}</p>
    </li>
  );
};

export default AchievementItem;
