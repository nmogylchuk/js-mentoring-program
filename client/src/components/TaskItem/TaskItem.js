import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import './TaskItem.scss';

const TaskItem = ({ taskItem: { status, description } }) => {
  const getFacets = () => {
    const icon = status === 'SUCCESS' ? faCheck : faTimes;
    const buttonStatus = status === 'SUCCESS' ? 'done' : 'failure';
    const buttonClassName = `archive-item__button archive-item__button--${buttonStatus}`;
    const descriptonClassName = status === 'SUCCESS' ? 'archive-item__label archive-item__label--done' : 'archive-item__label';

    return { icon, buttonClassName, descriptonClassName };
  };

  const { icon, buttonClassName, descriptonClassName } = getFacets();

  return (
    <div className='task-item list-group-item'>
      <button className={buttonClassName} aria-label='Left Align'>
        <FontAwesomeIcon icon={icon} />
      </button>
      <span className={descriptonClassName}>{description}</span>
    </div>
  );
};

export default TaskItem;
