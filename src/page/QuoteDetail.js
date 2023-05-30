import React, { useEffect, useState } from 'react';
import QuoteItem from '../components/quotes/QuoteItem';
import { useParams } from 'react-router';
import useHttp from '../hook/useHttp';

import LoadingSpinner from '../components/UI/LoadingSpinner';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const QuoteDetail = () => {
  const { quoteId } = useParams();
  const { data, loading } = useHttp();

  let quoteFindById = data?.find(item => item.id === quoteId);
  let content;
  if (quoteFindById) {
    content = (
      <HighlightedQuote
        text={quoteFindById.text}
        author={quoteFindById.author}
      />
    );
  } else {
    content = <p>No found</p>;
  }

  console.log(quoteFindById);
  return (
    <>
      <QuoteItem text='QuoteDetail' author={quoteId} />
      {loading ? LoadingSpinner : content}
    </>
  );
};

export default QuoteDetail;
