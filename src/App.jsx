import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './pages/RootLayout'

const App = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
  }
])

export default App

