import { Download, Star } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function AppCard({ app }) {
  return (
    <Link to={`/apps/${app.id}`} className="block  bg-white shadow-lg rounded p-3 transition">
      <div className="items-center gap-3 bg-white">
        <img src={app.image} alt={app.title} className="w-[240px] h-[260px] rounded object-cover" />
        <div>
          <h4 className="font-semibold py-2">{app.title}</h4>
          <div className='flex justify-between'>
          <div className="text-xs text-green-300 mt-1 flex gap-1"><Download size={14} />{app.downloads.toLocaleString()} </div>
          <div className="text-xs text-orange-300 mt-1 flex gap-1"><Star size={14} /> {app.ratingAvg}  </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
