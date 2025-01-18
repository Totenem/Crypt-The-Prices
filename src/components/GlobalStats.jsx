import React from 'react'

export function GlobalStats({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-purple-100 p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2 text-purple-800">Total Market Cap</h2>
        <p className="text-2xl text-black">
          ${parseFloat(stats.total_mcap).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
      </div>
      <div className="bg-purple-100 p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2 text-purple-800">Bitcoin Dominance</h2>
        <p className="text-2xl text-black">
          {typeof stats.btc_d === 'string' ? parseFloat(stats.btc_d).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : 'N/A'}%
        </p>
      </div>
      <div className="bg-purple-100 p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2 text-purple-800">24h Volume</h2>
        <p className="text-2xl text-black">
          ${parseFloat(stats.total_volume).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
      </div>
      <div className="bg-purple-100 p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2 text-purple-800">Active Cryptocurrencies</h2>
        <p className="text-2xl text-black">{stats.coins_count.toLocaleString()}</p>
      </div>
    </div>
  )
}

