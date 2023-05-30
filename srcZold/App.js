import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootPage from './pages/RootPage';
import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    // children: [
    //   {
    //     path: '/quotes',
    //     element: <AllQuotes />,
    //     children: [{ path: ':quoteId', element: <QuoteDetail /> }],
    //   },
    //   { path: '/new-quote', element: <NewQuote /> },
    // ],
  },
]);
function App() {
  // return (
  //   <Layout>
  //     <Switch>
  //       <Route path='/' exact>
  //         <Redirect to='/quotes' />
  //       </Route>
  //       <Route path='/quotes' exact>
  //         <AllQuotes />
  //       </Route>
  //       <Route path='/quotes/:quoteId'>
  //         <QuoteDetail />
  //       </Route>
  //       <Route path='/new-quote'>
  //         <NewQuote />
  //       </Route>
  //       <Route path='*'>
  //         <NotFound />
  //       </Route>
  //     </Switch>
  //   </Layout>
  // );
  return <RouterProvider router={router} />;
}

export default App;
