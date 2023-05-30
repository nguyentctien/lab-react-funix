import React from 'react';
import { Outlet } from 'react-router';

const RootPage = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default RootPage;
