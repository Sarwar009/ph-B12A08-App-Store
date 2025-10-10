import React, {useState, useMemo, useEffect} from 'react';
import appsData from '../data/data';
import AppCard from '../components/Appcard';

export default function AllApps () {
  const [query, setQuery] = useState ('');
  const [loading, setLoading] = useState (false);
  const [sort, setSort] = useState ('none');

  useEffect (
    () => {
      setLoading (true);
      const t = setTimeout (() => setLoading (false), 350);
      return () => clearTimeout (t);
    },
    [query]
  );

  console.log (setSort);

  const filtered = useMemo (
    () => {
      const q = query.trim ().toLowerCase ();
      let arr = appsData.filter (a => a.title.toLowerCase ().includes (q));
      if (sort === 'high-low')
        arr = arr.slice ().sort ((x, y) => y.downloads - x.downloads);
      if (sort === 'low-high')
        arr = arr.slice ().sort ((x, y) => x.downloads - y.downloads);
      return arr;
    },
    [query, sort]
  );

  return (
    <div>
      <div className="mb-8 text-center items-center">
        <h2 className="text-2xl md:text-5xl font-bold py-2">
          Our All Applications
        </h2>
        <p className="text-sm text-slate-400">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-3 mb-4">
        <div className="text-sm">
          {' '}Apps Found: <strong>{appsData.length}</strong>
        </div>
        <div className="flex gap-2 items-center">

          <div className="flex items-center bg-white shadow-md px-3 py-2 rounded w-full max-w-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-400 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z"
              />
            </svg>
            <input
              value={query}
              onChange={e => setQuery (e.target.value)}
              placeholder="Search apps..."
              className="w-full outline-none border-none focus:ring-0 text-gray-700 placeholder-gray-400"
            />
          </div>

        </div>
      </div>

      {loading
        ? <div className="flex flex-col items-center justify-center py-16">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-green-500 animate-spin" />
              <div className="absolute inset-2 rounded-full border-4 border-t-transparent border-emerald-300 animate-[spin_2s_linear_infinite_reverse]" />
            </div>
            <p className="mt-4 text-green-500 font-semibold animate-pulse">
              Loading
            </p>
          </div>
        : <div>
            {filtered.length === 0
              ? <div className="text-center text-slate-400 mt-8">
                  No App Found
                </div>
              : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filtered.map (app => <AppCard key={app.id} app={app} />)}
                </div>}
          </div>}
    </div>
  );
}
