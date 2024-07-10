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
import { getAllBlogs, getBlogById } from './lib/fetchBlogs.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PrivetRoute from './pages/routes/PrivetRoute.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import CategoryPage from './pages/dashboard/CategoryPage.jsx';
import BlogPage from './pages/dashboard/BlogPage.jsx';
import ProfilePage from './pages/dashboard/ProfilePage.jsx';
import CreateCategory from './pages/dashboard/CreateCategory.jsx';
import CreateBlogPage from './pages/dashboard/CreateBlogPage.jsx';
import UpdateBlogPage from './pages/dashboard/UpdateBlogPage.jsx';
// import AuthProvider from './provider/AuthProvider.jsx';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        // loader: getAllBlogs,
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
  {

    element: <PrivetRoute />,
    children: [
      {
        path: "/dashboard/home",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/category",
        element: <CategoryPage />,
      },
      {
        path: "/dashboard/category/create",
        element: <CreateCategory />,
      },
      {
        path: "/dashboard/blogs",
        element: <BlogPage />,
      },
      {
        path: "/dashboard/blogs/create",
        element: <CreateBlogPage />,
      },
      {
        path: "/dashboard/blogs/update/:blogId",
        element: <UpdateBlogPage />,
        loader: getBlogById
      },
      {
        path: "/dashboard/profile",
        element: <ProfilePage />,
      },
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
