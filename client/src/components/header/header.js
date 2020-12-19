import React from 'react';
import { useHistory } from 'react-router-dom';
import './header.scss';

const Header = () => {
  const history = useHistory();

  const logoutHandler = () => {
    window.localStorage.removeItem('loginInfo');
    window.location.reload();
    history.push('/');
  };

  return (
    <div className='header'>
      <button className='header__logout-button' type='button' onClick={logoutHandler} aria-label="Right Align">
        Logout
      </button>
    </div>
  );
};

export default Header;
