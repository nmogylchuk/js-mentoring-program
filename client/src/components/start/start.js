import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import './start.css';

const Start = () => {
  return (
    <div className='start'>
      <p className='start__description'>Lets start your brand-new challenge for the next 30 days</p>
      <Link to='/'>
        <button className='start__button'>Start</button>
      </Link>
    </div>
  );
};

export default Start;
