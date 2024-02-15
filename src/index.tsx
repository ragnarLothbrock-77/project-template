import { createRoot } from 'react-dom/client';
import App from './components/App';
import React, { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About } from './pages/About/index';
import { Shop } from './pages/Shop/index';


const root = createRoot(document.getElementById('app'));

if (!root) {
  throw new Error('root element not found')
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/about',
        element: <Suspense fallback="Loading...">  <About /></Suspense>
      },
      {
        path: '/shop',
        element: <Suspense fallback="Loading...">  <Shop /></Suspense>
      }
    ]
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);