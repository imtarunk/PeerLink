import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './home';
import Feed from './Feed'
import ProfileFeed from './Profile'
import Login from './login';
import Signup from './signup';
import Authpage from './authPage';

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
          element: <ProfileFeed />,
        }
      ]
    },
    {
      path: "/login",
      element: <Authpage />,
      children: [
        {
          path: "/login",
          element: <Login />

        },

      ]
    },
    {
      path: "/signup",
      element: <Authpage />,
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