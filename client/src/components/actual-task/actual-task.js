import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './actual-task.css';

const ActualTask = ({ actualTask: { description }, status, onChangeStatus }) => {
  console.log('status');
  console.log(status);
  return (
    <div className='actual-task'>
      <h1 className='actual-task__name'>Hello my friend,</h1>
      {status === 'SUCCESS' ? (
        <p className='actual-task__message actual-task__message--done'>You`ve already completed your task for today. Well Done!</p>
      ) : (
        <p className='actual-task__message'>This is your smart task for today:</p>
      )}
      <div className='actual-task__item'>
        <button className={`actual-task__button ${status === 'SUCCESS' ? 'actual-task__button--done' : ''}`} onClick={onChangeStatus}>
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <span
          className={`actual-task__description ${status === 'SUCCESS' ? 'actual-task__description--done' : ''}`}
          onClick={onChangeStatus}
        >
          {description}
        </span>
      </div>
    </div>
  );
};

export default ActualTask;