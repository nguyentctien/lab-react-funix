import { useCallback, useEffect, useState } from 'react';

import classes from './AuthForm.module.css';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from '@firebase/auth';
import { auth, firebaseConfig } from './firebase';
import { useNavigate } from 'react-router';

import { useUserContext } from '../../context/useContext';
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState(null);
  const [enterEmail, setEnterEmail] = useState('');
  const [enterPassword, setEnterPassword] = useState('');

  const navigate = useNavigate();
  const switchAuthModeHandler = () => {
    setIsLogin(prevState => !prevState);
  };

  const reset = () => {
    setEnterEmail('');
    setEnterPassword('');
  };
  const API_FIREBASE = firebaseConfig.apiKey;
  const [token, setToken] = useState(null);
  const submitHandler = async e => {
    e.preventDefault();
    try {
      if (isLogin) {
        let user = await signInWithEmailAndPassword(
          auth,
          enterEmail,
          enterPassword
        );
        let token = user._tokenResponse.idToken;
        setToken(token);
      }
      // TODO: Sign Up
      else {
        await createUserWithEmailAndPassword(auth, enterEmail, enterPassword);
        reset();
      }

      switchAuthModeHandler();
      setError(null);
    } catch (error) {
      setError(error.code);
    }
    console.log(error);
    // if (error === null) navigate('/');
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input
            type='email'
            id='email'
            required
            onChange={e => setEnterEmail(e.target.value)}
            value={enterEmail}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            onChange={e => setEnterPassword(e.target.value)}
            value={enterPassword}
          />
        </div>
        <div className={classes.actions}>
          <button type='submit'>{isLogin ? 'Login' : 'Create Account'}</button>

          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
