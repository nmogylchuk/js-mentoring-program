import React from 'react';
import ActualAchievementItem from '../actual-achievement-item/actual-achievement-item';
import './actual-achievement-list.css';

const ActualAchievementList = ({ actualAchievementsList }) => {
  return (
    <div className='actual-achievement-list'>
      <div className='actual-achievement-list__list'>
        {actualAchievementsList.map(actualAchievementItem => (
          <ActualAchievementItem key={actualAchievementItem.id} actualAchievementItem={actualAchievementItem} />
        ))}
      </div>
    </div>
  );
};

export default ActualAchievementList;
