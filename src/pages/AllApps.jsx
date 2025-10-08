import React, { useState, useMemo, useEffect } from 'react'
import appsData from '../data/data'
import AppCard from '../components/Appcard'

export default function AllApps() {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [sort, setSort] = useState('none')

  useEffect(() => {
    setLoading(true)
    const t = setTimeout(() => setLoading(false), 350)
    return () => clearTimeout(t)
  }, [query])

  console.log(setSort);
  

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    let arr = appsData.filter(a => a.title.toLowerCase().includes(q))
    if (sort === 'high-low') arr = arr.slice().sort((x,y) => y.downloads - x.downloads)
    if (sort === 'low-high') arr = arr.slice().sort((x,y) => x.downloads - y.downloads)
    return arr
  }, [query, sort])

  return (
    <div>
      <div className="mb-8 text-center items-center">
        <h2 className="text-2xl md:text-5xl font-bold py-2">Our All Applications</h2>
        <p className="text-sm text-slate-400">Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-3 mb-4">
        <div className="text-sm"> Apps Found: <strong>{appsData.length}</strong></div>
        <div className="flex gap-2 items-center">

          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search apps..." className="px-3 py-2 rounded bg-white shadow-md" />
        </div>
      </div>

      {loading ? (
        <div className="flex items-center gap-2"><div className="w-6 h-6 border-4 border-white loader"></div><span>Searching...</span></div>
      ) : (
        <>
          {filtered.length === 0 ? (
            <div className="text-center text-slate-400 mt-8">No App Found</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filtered.map(app => <AppCard key={app.id} app={app} />)}
            </div>
          )}
        </>
      )}
    </div>
  )
}
