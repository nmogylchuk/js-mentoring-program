import React from 'react';
import './actual-achievement-item.css';

const ActualAchievementItem = ({ actualAchievementItem: { description, status, image } }) => {
  return (
    <div className='actual-achievement-item'>
      <button className={`actual-achievement-item__button ${status === 'SUCCESS' ? 'achievement-item__button--done' : ''}`}>
        <img className='actual-achievement-item__image' src={image} alt='achievement image' />
      </button>
      <p className='actual-achievement-item__description'>{description}</p>
    </div>
  );
};

export default ActualAchievementItem;
