import React, { useState } from 'react';
import QuoteItem from '../components/quotes/QuoteItem';
import QuoteForm from '../components/quotes/QuoteForm';
import { FIREBASE_URL, PARAM_JSON } from '../util/firebase-url';
const NewQuote = () => {
  // const addQuoteHandler = async value => {
  //   await fetch(`${FIREBASE_URL}/${PARAM_JSON}`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(value),
  //   });
  // };

  return (
    <>
      <QuoteItem text='New Quote' />
      <QuoteForm />
      {/* <QuoteForm onAddQuote={addQuoteHandler} /> */}
    </>
  );
};

export default NewQuote;
