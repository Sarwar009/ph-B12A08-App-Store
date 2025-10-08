import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ToastContainer } from 'react-toastify'
import Loading from '../components/Loading'

export default function RootLayout() {
  return (
    <>
      <Header />
      <Loading />
      <main className="max-w-6xl mx-auto p-6 min-h-[70vh]">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer position="bottom-right" />
    </>
  )
}
