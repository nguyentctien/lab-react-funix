import React from 'react';
import QuoteItem from '../components/quotes/QuoteItem';
import { useParams } from 'react-router';

const QuoteDetail = () => {
  const { quoteId } = useParams();
  console.log(quoteId);
  return (
    <>
      <QuoteItem text='QuoteDetail' author={quoteId} />
    </>
  );
};

export default QuoteDetail;
