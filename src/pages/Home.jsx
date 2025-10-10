import React, {useEffect, useState} from 'react';
import apps from '../data/data';
import {Link} from 'react-router-dom';
import AppCard from '../components/Appcard';

export default function Home () {
  const [loading, setLoading] = useState (true);
  const [topApps, setTopApps] = useState ([]);

  useEffect (() => {
    const timer = setTimeout (() => {
      setTopApps (apps.slice (0, 8));
      setLoading (false);
    }, 1200);
    return () => clearTimeout (timer);
  }, []);

  return (
    <div>
      <section className="rounded p-8 text-center mb-6">
        <h2 className="text-3xl md:text-6xl font-extrabold text-center items-center">
          <span className="px-0 md:px-[250px]">We Build </span>
          <span className=" text-purple-500">Productive </span>
          Apps
        </h2>
        <p className="mt-2 p-3 md:p-4 font-bold text-md text-gray-400">
          At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>
        <div className="mt-4 flex justify-center gap-3">
          <a
            className="bg-gray-100 px-4 py-2 rounded-lg flex gap-2 hover:bg-gray-300 transition text-center items-center"
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-apple-icon lucide-apple"
            >
              <path d="M12 6.528V3a1 1 0 0 1 1-1h0" />
              <path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21" />
            </svg>
            {' '}
            App Store
          </a>
          <a
            className="bg-gray-100 px-4 py-2 rounded-lg flex gap-2 hover:bg-gray-300 transition text-center items-center"
            href="https://play.google.com/store"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-play-icon lucide-play"
            >
              <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
            </svg>
            {' '}
            Play Store
          </a>
        </div>
      </section>

      <img src="/hero.png" alt="hero" className="flex w-full items-center" />

      <section className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white py-10 px-4 rounded mb-8">
        <h1 className="text-2xl md:text-4xl font-extrabold text-center items-center">
          Trusted by Millions, Built for You
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className=" p-4 rounded text-center">
            <p className="text-sm text-slate-300">Total Downloads</p>
            <h3 className="text-4xl font-bold py-2">29.8M</h3>
            <p className="text-sm text-slate-300">21% more than last month</p>
          </div>
          <div className=" p-4 rounded text-center">
            <p className="text-sm text-slate-300">Total Reviews</p>
            <h3 className="text-4xl font-bold py-2">900K</h3>
            <p className="text-sm text-slate-300">46% more than last month</p>
          </div>
          <div className=" p-4 rounded text-center">
            <p className="text-sm text-slate-300">Active Apps</p>
            <h3 className="text-4xl font-bold py-2">132+</h3>
            <p className="text-sm text-slate-300">31 more will Launch</p>
          </div>
        </section>
      </section>

      <section>
        <div className="text-center items-center mb-4">
          <h3 className="text-2xl md:text-4xl font-bold pb-2">Trending Apps</h3>
          <p>Explore All Trending Apps on the Market developed by us</p>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {topApps.map (a => <AppCard key={a.id} app={a} />)}
              </div>
              <div className="flex justify-center mt-6">
                <Link
                  to="/apps"
                  className="inline-block bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-5 py-2 rounded-lg font-medium shadow-md hover:opacity-90 transition text-center"
                >
                  Show All
                </Link>
              </div>
            </div>}
      </section>
    </div>
  );
}
