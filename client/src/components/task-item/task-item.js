import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import './task-item.css';

const TaskItem = ({ taskItem: { status, description } }) => {
  return (
    <div className='task-item list-group-item'>
      {status === 'SUCCESS' ? (
        <button className='archive-item__button archive-item__button--done'>
          <FontAwesomeIcon icon={faCheck} />
        </button>
      ) : (
        <button className='archive-item__button archive-item__button--failure'>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      )}
      <span className={`task-item__label ${status === 'SUCCESS' ? 'task-item__label--done' : ''}`}>{description}</span>
    </div>
  );
};

export default TaskItem;
