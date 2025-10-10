import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center p-6">
      <div className="bg-gradient-to-b from-rose-700/30 to-rose-900/10 backdrop-blur-md rounded-2xl shadow-lg p-10 border border-rose-600/20 max-w-md w-full">
        <div className="flex flex-col items-center space-y-4">
          {/* Icon */}
          <div className="bg-rose-600/20 p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-rose-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z"
              />
            </svg>
          </div>

          {/* Text */}
          <h3 className="text-2xl font-bold text-black-800 tracking-wide">
            404 — Page Not Found
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            The page you’re looking for doesn’t exist or may have been moved.
          </p>

          {/* Button */}
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-6 py-2.5 bg-gradient-to-r from-rose-600 to-pink-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:opacity-90 transition-all"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
