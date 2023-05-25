import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
const App = () => {
  // bai 9.1
  return (
    <>
      <Header />
      {/* <Cart /> */}
      <main>
        <Meals />
      </main>
    </>
  );
};
export default App;
