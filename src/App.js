import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './page/Root';
import AllQuotes, { loader as loaderAllQuote } from './page/AllQuotes';
import QuoteDetail from './page/QuoteDetail';
import NewQuote from './page/NewQuote';
import NotFound from './page/NotFound';

import { action as actionForm } from './components/quotes/QuoteForm';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <AllQuotes />, loader: loaderAllQuote },
      {
        path: 'quotes',
        children: [
          { index: true, element: <AllQuotes />, loader: loaderAllQuote },
          { path: ':quoteId', element: <QuoteDetail /> },
        ],
      },
      { path: 'new-quote', element: <NewQuote />, action: actionForm },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
