import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './home';
import Feed from './Feed'
import Profile from './Profile'
import AuthPage from './authPage'
import Login from './login';
import Signup from './signup';

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <Feed />,
        },
        {
          path: "/profile",
          element: <Profile />,
        }
      ]
    },
    {
      path: "/login",
      element: <AuthPage />,
      children: [
        {
          path: "/login",
          element: <Login />

        },

      ]
    },
    {
      path: "/signup",
      element: <AuthPage />,
      children: [
        {
          path: "/signup",
          element: <Signup />
        }
      ]
    }


  ])
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body