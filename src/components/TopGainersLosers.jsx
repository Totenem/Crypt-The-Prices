import React from 'react'
import { Link } from 'react-router-dom'

export function TopGainersLosers({ coins }) {
  const sortedCoins = [...coins].sort((a, b) => parseFloat(b.percent_change_24h) - parseFloat(a.percent_change_24h))
  const topGainers = sortedCoins.slice(0, 5)
  const topLosers = sortedCoins.slice(-5).reverse()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-purple-800">Top Gainers</h2>
        <ul>
          {topGainers.map((coin) => (
            <li key={coin.symbol} className="mb-2">
              <Link to={`/coin/${coin.id}`} className="font-semibold text-black hover:text-purple-600">
                {coin.symbol}
              </Link>: ${parseFloat(coin.price_usd).toFixed(2)} 
              <span className="text-green-600 ml-2">+{parseFloat(coin.percent_change_24h).toFixed(2)}%</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4 text-purple-800">Top Losers</h2>
        <ul>
          {topLosers.map((coin) => (
            <li key={coin.symbol} className="mb-2">
              <Link to={`/coin/${coin.id}`} className="font-semibold text-black hover:text-purple-600">
                {coin.symbol}
              </Link>: ${parseFloat(coin.price_usd).toFixed(2)} 
              <span className="text-red-600 ml-2">{parseFloat(coin.percent_change_24h).toFixed(2)}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

