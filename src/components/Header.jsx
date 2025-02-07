import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaChartLine, FaCoins, FaBlog } from 'react-icons/fa'

export function Header() {
  return (
    <header className="bg-purple-600 text-white">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-4">
          <li><Link to="/" className="flex items-center hover:text-purple-200"><FaHome className="mr-1" /> Home</Link></li>
          <li><Link to="/price-tracker" className="flex items-center hover:text-purple-200"><FaCoins className="mr-1" /> Search & Track</Link></li>
          <li><Link to="/maintenance" className="flex items-center hover:text-purple-200"><FaChartLine className="mr-1" /> Insights</Link></li>
          <li><Link to="/blog" className="flex items-center hover:text-purple-200"><FaBlog className="mr-1" /> Blog</Link></li>
        </ul>
      </nav>
    </header>
  )
}

