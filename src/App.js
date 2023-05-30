import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './page/Root';
import AllQuotes from './page/AllQuotes';
import QuoteDetail from './page/QuoteDetail';
import NewQuote from './page/NewQuote';
import NotFound from './page/NotFound';
// import NotFound from './pages/NotFound';
// import Layout from './components/layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <AllQuotes /> },
      {
        path: 'quotes',
        children: [
          { index: true, element: <AllQuotes /> },
          { path: ':quoteId', element: <QuoteDetail /> },
        ],
      },
      { path: 'new-quote', element: <NewQuote /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
