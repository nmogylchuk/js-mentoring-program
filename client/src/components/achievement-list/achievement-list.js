import React from 'react';
import AchievementItem from './../achievement-item/achievement-item';
import './achievement-list.css';

const AchievementList = ({ achievementsList, achievementDoneCount, achievementTotalCount }) => {
  return (
    <div className='achievement-list'>
      <h2 className='achievement-list__title'>
        Achievements: {achievementDoneCount} / {achievementTotalCount}
      </h2>
      <div className='achievement-list__list'>
        {achievementsList.map(achievementItem => (
          <AchievementItem key={achievementItem.id} achievementItem={achievementItem} />
        ))}
      </div>
    </div>
  );
};

export default AchievementList;
