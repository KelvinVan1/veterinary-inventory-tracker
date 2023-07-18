import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Inventory from './pages/inventory/inventory';
import Startup from './startup';
import Login from './pages/login';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Startup/>,
  },

  {
    path: '/Login',
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
