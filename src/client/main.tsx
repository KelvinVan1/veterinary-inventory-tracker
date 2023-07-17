import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Inventory from './pages/inventory/inventory';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>,
  },

  //Catch path (this is a temporary solution will have this direct to an error page later)
  // {
  //   path: '*',
  //   element: <Inventory/>,
  // },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
);
