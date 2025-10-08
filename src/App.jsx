import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import NotFound from './pages/RootLayout'
import Home from './pages/Home'
import AllApps from './pages/AllApps'
import AppDetails from './pages/AppDetails'
import MyInstallation from './pages/MyInstallation'

const App = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'apps', element: <AllApps /> },
      { path: 'apps/:id', element: <AppDetails /> },
      { path: 'installation', element: <MyInstallation /> },
      // any other route handled by errorElement
    ]
  }
])

export default App

