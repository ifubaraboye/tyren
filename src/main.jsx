import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import AltLayout from './layouts/AltLayout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About.js';
import Lens from './pages/Lens.js';
import Home from './pages/Home.js';

const router = createBrowserRouter([
  // Default layout for home page
  {
    path: '/',
    element: <App />,
    errorElement: <p>Page not found</p>,
    children: [
      {
        index: true, // this makes it the default child of '/'
        element: <Home />
      }
    ]
  },
  // Alternative layout for about and lens pages
  {
    path: '/', // still under root, but separate layout
    element: <AltLayout />,
    children: [
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'lens',
        element: <Lens />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
