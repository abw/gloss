import React from 'react'
import Layout from './Layout.jsx'
import Home from '../pages/Home.jsx'
import GettingStarted from '../pages/GettingStarted.jsx'
import Presets from '../pages/presets/index.jsx'
import Examples from '../pages/examples/index.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Discussion from '../pages/Discussion.jsx'
import Rules from '../pages/Rules.jsx'

export const Router = createBrowserRouter(
  [
    {
      path:     '/',
      element:  <Layout/>,
      children: [
        { path: '/',               element: <Home/> },
        { path: 'getting-started', element: <GettingStarted/> },
        { path: 'rules',           element: <Rules/> },
        { path: 'discussion',      element: <Discussion/> },
        { path: 'presets/*',       element: <Presets/> },
        { path: 'examples/*',      element: <Examples/> }
      ]
    },
  ],
  {
    basename: import.meta.env.BASE_URL
  }
)

export default Router