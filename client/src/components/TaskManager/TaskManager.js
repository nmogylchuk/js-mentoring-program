import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ActualTask from '../ActualTask/ActualTask';
import Header from '../Header/Header';
import ActualAchievementList from '../ActualAchievementList/ActualAchievementList';
import currentTask from '../../data/actualTask.json';
import actualAchievements from '../../data/actual-achievements.json';
import './TaskManager.scss';

const TaskManager = () => {
  const [actualTask, setActualTask] = useState('');
  const [actualAchievementsList, setActualAchievementsList] = useState([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const getActualTask = setTimeout(() => {
      setActualTask(currentTask);
    }, 200);
    return () => {
      clearTimeout(getActualTask);
    };
  }, []);

  useEffect(() => {
    const getActualAchievementsList = setTimeout(() => {
      setActualAchievementsList(actualAchievements);
    }, 200);
    return () => {
      clearTimeout(getActualAchievementsList);
    };
  }, []);

  const onChangeStatus = () => {
    setStatus(() => 'SUCCESS');
  };

  return (
    <div className='task-manager'>
      <Header />
      <ActualTask actualTask={actualTask} status={status} onChangeStatus={onChangeStatus} />
      <div className='task-manager__list'>
        <div className='task-manager__link'>
          <Link to='/archive'>Go to archive</Link>
        </div>
        <div className='task-manager__link'>
          <Link to='/challenge'>Go to challenge result</Link>
        </div>
      </div>
      <ActualAchievementList actualAchievementsList={actualAchievementsList} />
    </div>
  );
};

export default TaskManager;
