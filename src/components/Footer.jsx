import React from 'react'
export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 mt-8">
      <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="font-semibold"><a href="/">App Store</a></h3>
          <p className="text-sm">All Rights Reserved!</p>
        </div>
        <div className="text-sm">
          <p>© {new Date().getFullYear()} App Store</p>
        </div>
      </div>
    </footer>
  )
}
