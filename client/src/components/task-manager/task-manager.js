import React, { useEffect, useState } from 'react';
import ActualTask from '../actual-task/actual-task';
import Header from '../header/header';
import currentTask from './../../data/actualTask.json';
import ActualAchievementList from '../actual-achievement-list/actual-achievement-list';
import { Link } from 'react-router-dom';
import actualAchievements from './../../data/actual-achievements.json';
import './task-manager.css';

const TaskManager = () => {
  const [actualTask, setActualTask] = useState('');
  const [actualAchievementsList, setActualAchievementsList] = useState([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    try {
      const getActualTask = setTimeout(() => {
        setActualTask(currentTask);
      }, 200);
      return () => {
        clearTimeout(getActualTask);
      };
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    try {
      const getActualAchievementsList = setTimeout(() => {
        setActualAchievementsList(actualAchievements);
      }, 200);
      return () => {
        clearTimeout(getActualAchievementsList);
      };
    } catch (e) {
      console.error(e);
    }
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
