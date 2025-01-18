import React from 'react'
import { Link } from 'react-router-dom'

export function CryptoTable({ cryptos }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-purple-600 text-white">
          <tr>
            <th className="px-4 py-2">Rank</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Price (USD)</th>
            <th className="px-4 py-2">Market Cap (USD)</th>
            <th className="px-4 py-2">Volume (24h)</th>
            <th className="px-4 py-2">Change (24h)</th>
          </tr>
        </thead>
        <tbody>
          {cryptos.map((crypto) => (
            <tr key={crypto.id} className="border-b border-purple-200">
              <td className="px-4 py-2">{crypto.rank}</td>
              <td className="px-4 py-2">
                <Link to={`/coin/${crypto.id}`} className="text-purple-600 hover:underline">
                  {crypto.name} ({crypto.symbol})
                </Link>
              </td>
              <td className="px-4 py-2">${parseFloat(crypto.price_usd).toFixed(2)}</td>
              <td className="px-4 py-2">${parseInt(crypto.market_cap_usd).toLocaleString()}</td>
              <td className="px-4 py-2">${crypto.volume24.toLocaleString()}</td>
              <td className="px-4 py-2">
                <span className={parseFloat(crypto.percent_change_24h) >= 0 ? 'text-green-600' : 'text-red-600'}>
                  {parseFloat(crypto.percent_change_24h).toFixed(2)}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

