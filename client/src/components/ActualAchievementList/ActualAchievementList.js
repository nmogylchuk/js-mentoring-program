import React from 'react';
import ActualAchievementItem from '../ActualAchievementItem/ActualAchievementItem';
import './ActualAchievementList.scss';

const ActualAchievementList = ({ actualAchievementsList }) => {
  return (
    <div className='actual-achievement-list'>
      <ul className='actual-achievement-list__list'>
        {actualAchievementsList.map(actualAchievementItem => (
          <ActualAchievementItem key={actualAchievementItem.id} actualAchievementItem={actualAchievementItem} />
        ))}
      </ul>
    </div>
  );
};

export default ActualAchievementList;
