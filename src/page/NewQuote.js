import React, { useState } from 'react';
import QuoteItem from '../components/quotes/QuoteItem';
import QuoteForm from '../components/quotes/QuoteForm';
import { FIREBASE_URL } from '../util/firebase-url';
const NewQuote = () => {
  const addQuoteHandler = async value => {
    const response = await fetch(`${FIREBASE_URL}/quote.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value),
    });
  };

  return (
    <>
      <QuoteItem text='New Quote' />
      <QuoteForm onAddQuote={addQuoteHandler} />
    </>
  );
};

export default NewQuote;
