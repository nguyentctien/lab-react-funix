import React from 'react';
import { Outlet } from 'react-router';
import Layout from '../components/Layout/Layout';
const Root = () => {
  return (
    <div>
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
};

export default Root;
