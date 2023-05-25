import React from 'react';
import styles from './Header.module.css';

import HeaderCartButton from './HeaderCartButton/HeaderCartButton';
import meals from '../../assets/meals.jpg';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={meals} alt='' />
      </div>
    </>
  );
};

export default Header;
