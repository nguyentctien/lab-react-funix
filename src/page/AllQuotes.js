import React from 'react';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import QuoteItem from '../components/quotes/QuoteItem';
import Comitem from '../components/comments/CommentItem';
import Card from '../components/UI/Card';

import Layout from '../components/layout/Layout';
const AllQuotes = () => {
  return (
    <>
      {/* <HighlightedQuote text='HighlightedQuote' author='ptm' /> */}
      {/*  */}
      <QuoteItem text='All Quote Page' />
      {/*  */}
      {/* <Card>
          <p>Card </p>
        </Card>
        <Comitem text='comment Item- comment' /> */}
    </>
  );
};

export default AllQuotes;
