import React from 'react'
import Layout from './Layout.jsx'
import Home from '../pages/Home.jsx'
import { createBrowserRouter } from 'react-router-dom'
import GettingStarted from '../pages/GettingStarted.jsx'
import Demo from '../pages/Demo.jsx'

export const Router = createBrowserRouter(
  [
    {
      path:     '/',
      element:  <Layout/>,
      children: [
        { path: '/',               element: <Home/> },
        { path: 'getting-started', element: <GettingStarted/> },
        { path: 'demo',            element: <Demo/> }
      ]
    },
  ],
  {
    basename: import.meta.env.BASE_URL
  }
)

export default Router