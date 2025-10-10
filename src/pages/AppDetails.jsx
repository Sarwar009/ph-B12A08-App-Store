import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import appsData from '../data/data';
import {installApp, isInstalled} from '../utils/localStorage';
import {toast} from 'react-toastify';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {Download, Star, UserStar} from 'lucide-react';

export default function AppDetails () {
  const {id} = useParams ();
  const navigate = useNavigate ();
  const app = appsData.find (a => String (a.id) === String (id));
  const [installed, setInstalled] = useState (false);

  useEffect (
    () => {
      if (app) setInstalled (isInstalled (app.id));
    },
    [app]
  );

  if (!app) {
    return (
      <div className="flex flex-col items-center justify-center text-center mt-20 p-6">
        <div className="bg-gradient-to-b from-indigo-700/30 to-indigo-900/10 backdrop-blur-md rounded-2xl shadow-lg p-10 border border-indigo-600/20 max-w-md w-full">
          <div className="flex flex-col items-center space-y-4">
            {/* Icon */}
            <div className="bg-indigo-600/20 p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-indigo-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 9.75L14.25 14.25M14.25 9.75L9.75 14.25M21 12A9 9 0 113 12a9 9 0 0118 0z"
                />
              </svg>
            </div>

            {/* Text */}
            <h3 className="text-2xl font-bold text-slate-100 tracking-wide">
              App Not Found
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We couldn’t find any details for this app. It may have been removed or doesn’t exist.
            </p>

            {/* Button */}
            <button
              onClick={() => navigate ('/apps')}
              className="mt-4 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:opacity-90 transition-all"
            >
              ← Back to Apps
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleInstall = () => {
    installApp (app);
    setInstalled (true);
    toast.success (`${app.title} installed!`);
  };

  const chartData = app.ratings.map (r => ({
    name: r.name.replace (' star', ''),
    value: r.count,
  }));

  return (
    <div className="max-w-5xl mx-auto  text-white p-6 rounded-xl  mt-6">

      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6">

        <div className="flex flex-col md:flex md:flex-row items-center gap-4">
          <img
            src={app.image}
            alt={app.title}
            className="w-48 h-48 object-contain bg-white p-3 rounded-xl shadow"
          />
          <div>
            <h2 className="text-4xl font-bold text-gray-600">{app.title}</h2>
            <p className="text-slate-400 text-lg py-1">
              Developed by:
              {' '}
              <span className="text-indigo-400">{app.companyName}</span>
            </p>
            <div className="flex flex-wrap gap-6 mt-3 text-sm">
              <div className="text-gray-600">
                <Download />
                <p className="text-md font-normal">Downloads</p>
                <p className="font-semibold">
                  {app.downloads.toLocaleString ()}
                </p>
              </div>
              <div className="text-gray-600">
                <Star />
                <p className="text-md font-normal">Avarage Rating</p>
                <p className="font-semibold">{app.ratingAvg}</p>
              </div>
              <div className="text-gray-600">
                <UserStar />
                <p className="text-slate-400">Total Reviews</p>
                <p className="font-semibold">{app.reviews}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button
            disabled={installed}
            onClick={handleInstall}
            className={`px-5 py-2.5 rounded-lg font-medium ${installed ? 'bg-white text-slate-400 cursor-not-allowed shadow-md' : 'bg-green-500 hover:bg-green-600 transition'}`}
          >
            {installed ? 'Installed' : `Install Now `}
          </button>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-bold mb-3 text-gray-800">Ratings</h3>
        <div className="bg-white rounded-lg p-5 border border-gray-200">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{top: 5, right: 40, left: 40, bottom: 20}}
            >
              <XAxis
                type="number"
                domain={[0, 'dataMax + 1000']}
                tick={{fill: '#9ca3af', fontSize: 12}}
                axisLine={{stroke: '#e5e7eb'}}
                tickLine={false}
              />
              <YAxis
                dataKey="name"
                type="category"
                width={40}
                tick={{fill: '#374151', fontSize: 13}}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip cursor={{fill: 'transparent'}} content={() => null} />
              <Bar
                dataKey="value"
                fill="#f97316"
                radius={[0, 4, 4, 0]}
                barSize={18}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-800">
        <h3 className="text-lg font-semibold mb-2">Description</h3>
        <p className="text-slate-300 leading-relaxed">{app.description}</p>
      </div>
    </div>
  );
}
