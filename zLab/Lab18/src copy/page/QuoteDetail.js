import React, { useEffect, useState } from 'react';
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

  return <section id='detail'>{loading ? LoadingSpinner : content}</section>;
};

export default QuoteDetail;
