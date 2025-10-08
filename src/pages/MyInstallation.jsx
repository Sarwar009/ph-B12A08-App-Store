import React, {useState, useEffect, useMemo} from 'react';
import {getInstalled, uninstallApp} from '../utils/localStorage';
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom';
import {Download, Star} from 'lucide-react';

export default function MyInstallation () {
  const [installed, setInstalled] = useState ([]);
  const [sortOrder, setSortOrder] = useState ('low-high'); // default sort

  useEffect (() => {
    setInstalled (getInstalled ());
  }, []);

  // Sorted apps based on downloads using useMemo
  const sortedApps = useMemo (
    () => {
      let arr = installed.slice ();
      if (sortOrder === 'high-low')
        arr.sort ((a, b) => b.downloads - a.downloads);
      if (sortOrder === 'low-high')
        arr.sort ((a, b) => a.downloads - b.downloads);
      return arr;
    },
    [installed, sortOrder]
  );

  const handleSortChange = e => {
    setSortOrder (e.target.value);
  };

  const handleUninstall = id => {
    const newList = uninstallApp (id);
    setInstalled (newList);
    toast.info ('App uninstalled');
  };

  if (!installed.length) {
    return (
      <div className="text-center mt-8">
        <h3 className="text-xl">No Installed Apps</h3>
        <p className="text-slate-400">You have not installed any apps yet.</p>
        <Link
          to="/apps"
          className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded"
        >
          Browse apps
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">
          My Installation ({installed.length})
        </h2>
        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="px-3 py-1 border rounded"
        >
          <option value="low-high">Downloads: Low → High</option>
          <option value="high-low">Downloads: High → Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {sortedApps.map (a => (
          <div
            key={a.id}
            className="bg-white shadow-md p-3 rounded flex justify-between"
          >
            <div className="flex items-center gap-3 ">
              <img
                src={a.image}
                alt={a.title}
                className="w-12 h-12 rounded object-cover"
              />
              <div className="flex-1">
                <h4 className="font-semibold">{a.title}</h4>
                <div className="text-sm text-slate-400 py-1">
                  {a.companyName}
                </div>
                <div className="flex gap-2">
                  <div className="text-sm text-green-300 flex gap-1 items-center">
                    <Download size={14} /> {a.downloads}
                  </div>
                  <div className="text-sm text-orange-300 flex gap-1 items-center">
                    <Star size={14} /> {a.ratingAvg}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-3">
              <button
                onClick={() => handleUninstall (a.id)}
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 transition-colors duration-300"
              >
                Uninstall
              </button>
              <Link
                to={`/apps/${a.id}`}
                className="px-4 py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition-colors duration-300 items-center"
              >
                Details
              </Link>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
