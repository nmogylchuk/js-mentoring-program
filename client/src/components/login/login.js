import React, { useState } from 'react';
import './Login.scss';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const changeHandler = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const loginHandler = () => {
    window.localStorage.setItem('loginInfo', JSON.stringify(form));
  };

  return (
    <div className='login'>
      <h1 className='login__title'>Login</h1>
      <form className='login__form'>
        <div>
          <label className='login__input-label' htmlFor='email'>
            Email
          </label>
        </div>
        <div>
          <input
            name='email'
            id='email'
            type='email'
            className='login__input-name'
            placeholder='Email'
            value={form.email}
            onChange={changeHandler}
            required
          />
        </div>

        <div>
          <label className='login__input-label' htmlFor='password'>
            Password
          </label>
        </div>
        <div>
          <input
            name='password'
            id='password'
            className='login__input-name'
            type='password'
            placeholder='Password'
            value={form.password}
            onChange={changeHandler}
            required
          />
        </div>
        <button className='login__button' type='submit' onClick={loginHandler} aria-label='Center Align'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
