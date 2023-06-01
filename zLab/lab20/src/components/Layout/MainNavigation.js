import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import { logoutUser } from '../../auth/auth';

const MainNavigation = () => {
  const logout = async () => {
    const confirm = window.confirm('Bạn có chắc muốn đăng xuất?');
    if (confirm) {
      localStorage.removeItem('token');
      await logoutUser();
    }
  };
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to='auth'>Login</Link>
          </li>
          <li>
            <Link to='profile'>Profile</Link>
          </li>
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
