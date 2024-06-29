import ReactDOM from 'react-dom/client'
import React from 'react';
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './layout/RootLayout.jsx';
import HomePage from './pages/home/HomePage.jsx';
import ErrorPage from './pages/error-page.jsx';
import AboutPage from './pages/about/AboutPage.jsx';
import LoginPage from './pages/login/LoginPage.jsx';
import Test from './pages/test/Test.jsx';
import RegisterPage from './pages/register/RegisterPage.jsx';

// Loader Functions::
import { getAllBlogs } from './lib/fetchBlogs.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: getAllBlogs,
      },
      {
        path: "/about",
        element: <AboutPage />,
        // loader: allCountryLoader,
      },
      {
        path: "/login",
        element: <LoginPage />,
        // loader: allCountryLoader,
      },
      {
        path: "/register",
        element: <RegisterPage />,
        // loader: allCountryLoader,
      },
      {
        path: "/test",
        element: <Test />,
        // loader: allCountryLoader,
      },

    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
