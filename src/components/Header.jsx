import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-slate-800 text-slate-100 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center gap-3">
          
          <div>
            <h1 className="text-lg font-semibold">App Store</h1>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-indigo-400 ${isActive ? "underline" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/apps"
            className={({ isActive }) =>
              `hover:text-indigo-400 ${isActive ? "underline" : ""}`
            }
          >
            Apps
          </NavLink>
          <NavLink
            to="/installation"
            className={({ isActive }) =>
              `hover:text-indigo-400 ${isActive ? "underline" : ""}`
            }
          >
            Installation
          </NavLink>

          
        </nav>
        <button><a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="bg-indigo-500 hover:bg-indigo-600 transition px-3 py-1 rounded hidden md:inline-block"
          >
            Contribution
          </a></button>

        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-slate-700 flex flex-col items-center gap-4 py-4">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `hover:text-indigo-400 ${isActive ? "underline" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/apps"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `hover:text-indigo-400 ${isActive ? "underline" : ""}`
            }
          >
            Apps
          </NavLink>
          <NavLink
            to="/installation"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `hover:text-indigo-400 ${isActive ? "underline" : ""}`
            }
          >
            Installation
          </NavLink>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
            className="bg-indigo-500 hover:bg-indigo-600 transition px-3 py-1 rounded"
          >
            Contribution
          </a>
        </div>
      )}
    </header>
  );
}
