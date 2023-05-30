import { Fragment, useEffect, useState } from 'react';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

const QuoteList = props => {
  const quotes = props.quotes;
  const [quoteSort, setQuoteSort] = useState([]);

  const navigate = useNavigate();

  const [isSortAscending, setIsSortAscending] = useState(true);
  const toggleSortHandler = () => setIsSortAscending(pre => !pre);

  const [searchParams] = useSearchParams();
  let search = searchParams.get('sort');

  // sort by author
  useEffect(() => {
    let sort;
    if (isSortAscending) {
      navigate('/quotes?sort=asc');
      sort = quotes.sort((a, b) => a.author.localeCompare(b.author));
    } else {
      sort = quotes.sort((a, b) => b.author.localeCompare(a.author));
      navigate('/quotes?sort=desc');
    }

    setQuoteSort(sort);
  }, [isSortAscending]);
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={toggleSortHandler}>
          Sort {isSortAscending ? 'Ascending' : 'Descending'}
        </button>
      </div>
      <ul className={classes.list}>
        {quoteSort.map(quote => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
