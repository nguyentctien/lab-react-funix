import React from 'react';
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';
const Layout = props => {
  return (
    <>
      <main className={classes.main}>
        <MainNavigation />
        {props.children}
      </main>
    </>
  );
};

export default Layout;
