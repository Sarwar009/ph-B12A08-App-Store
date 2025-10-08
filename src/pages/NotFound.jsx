import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="text-center mt-12">
      <h2 className="text-3xl font-bold">404 — Page not found</h2>
      <p className="text-slate-400 mt-2">The page you are looking for does not exist.</p>
      <Link to="/" className="mt-4 inline-block px-4 py-2 bg-indigo-600 rounded">Go Home</Link>
    </div>
  )
}
