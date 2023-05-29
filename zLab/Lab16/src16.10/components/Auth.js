import { useDispatch } from 'react-redux';

import classes from './Auth.module.css';
import { authActions } from '../store/auth';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Auth = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Please enter a valid email!').email(),
      password: Yup.string().required('Please enter a valid password!'),
    }),

    onSubmit: values => {
      dispatch(authActions.login());
    },
  });
  const emailErr = formik.errors.email ? (
    <p className={classes.err}> {formik.errors.email} </p>
  ) : null;
  const passwordErr = formik.errors.password ? (
    <p className={classes.err}> {formik.errors.password} </p>
  ) : null;
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={formik.handleSubmit}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {emailErr}
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {passwordErr}
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
