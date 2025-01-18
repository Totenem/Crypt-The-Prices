import React from 'react'

export function PriceChart({ coinData }) {
  return (
    <div className="bg-purple-100 p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4 text-purple-800">Price Chart</h2>
      <p className="text-black">This is where the price chart would be rendered.</p>
      <p className="text-black">Coin data:</p>
      <pre className="bg-white p-2 rounded mt-2 text-sm overflow-x-auto">
        {JSON.stringify(coinData, null, 2)}
      </pre>
    </div>
  )
}

