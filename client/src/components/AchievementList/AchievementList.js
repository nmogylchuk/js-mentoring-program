import React from 'react';
import AchievementItem from '../AchievementItem/AchievementItem';
import './AchievementList.scss';

const AchievementList = ({ achievementsList, achievementDoneCount, achievementTotalCount }) => {
  return (
    <div className='achievement-list'>
      <h2 className='achievement-list__title'>
        Achievements: {achievementDoneCount} / {achievementTotalCount}
      </h2>
      <ul className='achievement-list__list'>
        {achievementsList.map(achievementItem => (
          <AchievementItem key={achievementItem.id} achievementItem={achievementItem} />
        ))}
      </ul>
    </div>
  );
};

export default AchievementList;
