import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Inventory from './pages/inventory';
import InventoryAdd from './pages/addInventory';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Inventory/>,
  },

  //Catch path (this is a temporary solution will have this direct to an error page later)
  // {
  //   path: '*',
  //   element: <Inventory/>,
  // },
]);

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>
  // </React.StrictMode>,
);
