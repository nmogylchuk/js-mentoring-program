import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/header';
import TaskList from '../task-list/task-list';
import SearchPanel from '../search-panel/search-panel';
import TaskStatusFilter from '../task-status-filter/task-status-filter';
import AchievementList from '../achievement-list/achievement-list';
import tasks from '../../data/tasks.json';
import achievements from '../../data/achievements.json';
// import { SUCCESS } from 'constants';
import './challenge.scss';

const Challenge = () => {
  const [achievementsList, setAchievementsList] = useState([]);
  const [taskList, setTaskList] = useState([]);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getAchievementList = setTimeout(() => {
      setAchievementsList(achievements);
    }, 200);
    return () => {
      clearTimeout(getAchievementList);
    };
  }, []);

  useEffect(() => {
    const getTaskList = setTimeout(() => {
      setTaskList(tasks);
    }, 200);
    return () => {
      clearTimeout(getTaskList);
    };
  }, []);

  const onFilterChange = filter => {
    setFilter(filter);
  };

  const onSearchChange = search => {
    setSearch(search);
  };

  function filterTasks(taskList, filter) {
    return filter === 'all' ? taskList : taskList.filter(task => task.status === filter);
  }

  function searchItems(taskList, search) {
    if (!search.length) {
      return taskList;
    }

    return taskList.filter(task => {
      return task.description.toLowerCase().includes(search.toLowerCase());
    });
  }

  const taskDoneCount = taskList.filter(task => task.status === 'SUCCESS').length;
  const taskTotalCount = taskList.length;
  const visibleTasks = searchItems(filterTasks(taskList, filter), search);

  const achievementDoneCount = achievements.filter(achievement => achievement.status === 'SUCCESS').length;
  const achievementTotalCount = achievements.length;

  return (
    <div className='results'>
      <Header />
      <h1 className='results__title'>Challenge succesed!</h1>
      <div className='result__search-panel d-flex'>
        <SearchPanel onSearchChange={onSearchChange} />
        <TaskStatusFilter filter={filter} onFilterChange={onFilterChange} />
      </div>
      <TaskList visibleTasks={visibleTasks} taskTotalCount={taskTotalCount} taskDoneCount={taskDoneCount} />
      <AchievementList
        achievementsList={achievementsList}
        achievementDoneCount={achievementDoneCount}
        achievementTotalCount={achievementTotalCount}
      />
      <Link to='/start' className='results__button'>
        Start new 30 days challenge
      </Link>
    </div>
  );
};

export default Challenge;
