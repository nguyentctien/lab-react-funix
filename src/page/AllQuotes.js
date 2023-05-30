import { useEffect } from 'react';

import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import { FIREBASE_URL, PARAM_JSON } from '../util/firebase-url';
import { useLoaderData, useRoutes } from 'react-router';

import useHttp from '../hook/useHttp';
const AllQuotes = () => {
  // const data = useLoaderData();
  const { data, loading } = useHttp();
  console.log(loading);
  console.log(data);
  let content =
    data?.length === 0 ? <NoQuotesFound /> : <QuoteList quotes={data} />;
  return <>{loading ? <LoadingSpinner /> : content}</>;
};
export default AllQuotes;
export async function loader({ request, params }) {
  const response = await fetch(`${FIREBASE_URL}/${PARAM_JSON}`);

  if (!response.ok) {
    throw new Error('Could not fetch data.');
  } else {
    const data = await response.json();
    let dataTransform = [];

    for (const key in data) {
      dataTransform.push({
        id: key,
        ...data[key],
      });
    }
    return dataTransform;
  }
}
