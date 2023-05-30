import React from 'react';
import { Outlet } from 'react-router';
import Layout from '../components/layout/Layout';
import MainNavigation from '../components/layout/MainNavigation';
const Root = () => {
  return (
    <div>
      {/* <MainNavigation /> */}
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
};

export default Root;
