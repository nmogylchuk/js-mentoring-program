import React from 'react';
import ActualAchievementItem from '../actual-achievement-item/actual-achievement-item';
import './actual-achievement-list.scss';

const ActualAchievementList = ({ actualAchievementsList }) => {
  return (
    <ul className='actual-achievement-list'>
      <div className='actual-achievement-list__list'>
        {actualAchievementsList.map(actualAchievementItem => (
          <ActualAchievementItem key={actualAchievementItem.id} actualAchievementItem={actualAchievementItem} />
        ))}
      </div>
    </ul>
  );
};

export default ActualAchievementList;
