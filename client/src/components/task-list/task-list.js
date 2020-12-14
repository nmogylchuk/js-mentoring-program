import React from 'react';
import TaskItem from '../task-item/task-item';
import './task-list.css';

const TaskList = ({ visibleTasks, taskDoneCount, taskTotalCount }) => {
  return (
    <div className='task-list'>
      <h2 className='task-list__title'>
        Tasks: {taskDoneCount} / {taskTotalCount}
      </h2>
      <div className='task-list__list'>
        {visibleTasks.map(taskItem => (
          <TaskItem key={taskItem.id} taskItem={taskItem} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
