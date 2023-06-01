import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './page/Root';
import AuthPage from './page/AuthPage';
import HomePage from './page/HomePage';
import ProfilePage from './page/ProfilePage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'auth', element: <AuthPage /> },
      { path: 'profile', element: <ProfilePage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
