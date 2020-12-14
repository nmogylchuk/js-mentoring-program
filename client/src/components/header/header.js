import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const logoutHandler = () => {
    window.localStorage.removeItem('loginInfo');
  };

  return (
    <Link to='/logout' className='header'>
      <button className='header__logout-button' type='button' onClick={logoutHandler}>
        Logout
      </button>
    </Link>
  );
};

export default Header;
