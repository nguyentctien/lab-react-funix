import React from 'react';
import Layout from '../components/layout/Layout';
import MainNavigation from '../components/layout/MainNavigation';
const NotFound = () => {
  return (
    <>
      <Layout>
        <MainNavigation />
        <p>Page not found</p>
      </Layout>
    </>
  );
};

export default NotFound;
