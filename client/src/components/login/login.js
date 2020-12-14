import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const loginHandler = () => {
    window.localStorage.setItem('loginInfo', JSON.stringify(form));
  };

  return (
    <div className='login'>
      <h1 className='login__title'>Login</h1>
      <form className='login__form'>
        <div>
          <label className='login__input-label'>Email</label>
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
          <label className='login__input-label'>Password</label>
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
        <button className='login__button' type='submit' onClick={loginHandler}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
