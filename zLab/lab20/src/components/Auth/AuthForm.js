import { useState } from 'react';

import classes from './AuthForm.module.css';

import { useNavigate } from 'react-router';

import { createUser, loginUser } from '../../auth/auth';
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState(null);
  const [enterEmail, setEnterEmail] = useState('');
  const [enterPassword, setEnterPassword] = useState('');

  const navigate = useNavigate();
  const switchAuthModeHandler = () => {
    setIsLogin(prevState => !prevState);
  };
  const [token, setToken] = useState(null);

  const reset = () => {
    setEnterEmail('');
    setEnterPassword('');
  };

  // const createUser = async (email, password) => {
  //   try {
  //     await await createUserWithEmailAndPassword(auth, email, password);
  //     alert('Đăng ký thành công');
  //   } catch (error) {
  //     setError(error.code);
  //   }
  // };

  // const loginUser = async (email, password) => {
  //   try {
  //     await await signInWithEmailAndPassword(auth, email, password);
  //     alert('Đăng nhập thành công');
  //     navigate('/');
  //   } catch (error) {
  //     setError(error);
  //   }
  // };

  // const changePassword = async newPassword => {
  //   try {
  //     const user = await auth.currentUser;
  //     await user.updatePassword(newPassword);
  //     console.log('Đổi mật khẩu thành công');
  //   } catch (error) {
  //     console.log('Đổi mật khẩu thất bại:', error);
  //     throw error;
  //   }
  // };

  // const getToken = async () => {
  //   try {
  //     const user = await auth.currentUser;
  //     if (user) {
  //       const token = await user.getIdToken();
  //       setToken(token);
  //     } else {
  //       setToken(null);
  //     }
  //   } catch (error) {
  //     setError(error.code);
  //   }
  // };
  const submitHandler = async e => {
    e.preventDefault();
    try {
      if (isLogin) {
        // User signs in
        await loginUser(enterEmail, enterPassword);
      } else {
        // create user
        await createUser(enterEmail, enterPassword);
      }
    } catch (error) {
      setError(error.message);
    }

    if (!error) {
      switchAuthModeHandler();
    }
    console.log(error);
  };
  // if (token && !error) {
  //   localStorage.setItem('token', token);
  // }

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
