import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { SUCCESS } from 'constants';
import './task-item.scss';

const TaskItem = ({ taskItem: { status, description } }) => {
  return (
    <div className='task-item list-group-item'>
      {status === 'SUCCESS' ? (
        <button className='archive-item__button archive-item__button--done' aria-label="Left Align">
          <FontAwesomeIcon icon={faCheck} />
        </button>
      ) : (
        <button className='archive-item__button archive-item__button--failure aria-label="Left Align"'>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      )}
      <span className={`task-item__label ${status === 'SUCCESS' ? 'task-item__label--done' : ''}`}>{description}</span>
    </div>
  );
};

export default TaskItem;
