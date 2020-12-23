import React from 'react';
import './ActualAchievementItem.scss';

const ActualAchievementItem = ({ actualAchievementItem: { description, status, image } }) => {
  return (
    <li className='actual-achievement-item'>
      <button
        className={`actual-achievement-item__button ${status === 'SUCCESS' ? 'achievement-item__button--done' : ''}`}
        aria-label='Center Align'
      >
        <img className='actual-achievement-item__image' src={image} alt='achievement image' />
      </button>
      <p className='actual-achievement-item__description'>{description}</p>
    </li>
  );
};

export default ActualAchievementItem;
