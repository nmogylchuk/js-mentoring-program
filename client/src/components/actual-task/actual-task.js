import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
// import { SUCCESS } from 'constants';
import './actual-task.scss';

const ActualTask = ({ actualTask: { description }, status, onChangeStatus }) => {
  const [online, setOnline] = useState(true);

  // Vibration
  navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

  const vibrateStart = ms => {
    navigator.vibrate(ms);
  };

  // User Agent
  var browserArray = ['Chrome', 'Firefox', 'Safari', 'Opera', 'MSIE', 'Trident', 'Edge'];
  var browser,
    userAgent = navigator.userAgent;

  for (var i = 0; i < browserArray.length; i++) {
    if (userAgent.indexOf(browserArray[i]) > -1) {
      browser = browserArray[i];
      break;
    } else {
      browser = 'Unknown device';
    }
  }

  if (browser === 'MSIE' || browser === 'Trident' || browser === 'Edge') {
    browser = 'Internet Exporer';
  }

  // Online & Offline

  useEffect(() => {
    window.addEventListener('online', connectionHandler);
    window.addEventListener('offline', connectionHandler);

    return () => {
      window.removeEventListener('online', connectionHandler);
      window.removeEventListener('offline', connectionHandler);
    };
  });

  function connectionHandler(event) {
    setOnline(navigator.onLine);

    if (event.type === 'online') {
      console.log('You are online');
    } else {
      console.log('You are offline');
    }
  }

  return (
    <div className='actual-task'>
      <h1 className='actual-task__name'>Hello my {browser} friend,</h1>
      <div className='actual-task__status'>{online}</div>
      {status === 'SUCCESS' ? (
        <p className='actual-task__message actual-task__message--done'>You`ve already completed your task for today. Well Done!</p>
      ) : (
        <p className='actual-task__message'>This is your smart task for today:</p>
      )}
      <div className='actual-task__item'>
        <button
          className={`actual-task__button ${status === 'SUCCESS' ? 'actual-task__button--done' : ''}`}
          onClick={() => {
            onChangeStatus();
            vibrateStart(1000);
          }}
        >
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
