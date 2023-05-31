import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

import useHttp from '../hook/useHttp';
const AllQuotes = () => {
  const { data, loading } = useHttp();
  let quoteContent =
    data?.length === 0 ? <NoQuotesFound /> : <QuoteList quotes={data} />;
  return (
    <section id='all-quote'>
      {loading ? <LoadingSpinner /> : quoteContent}
    </section>
  );
};
export default AllQuotes;
