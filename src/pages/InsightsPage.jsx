import React, { useState, useEffect } from 'react'
import { PriceChart } from '../components/PriceChart'
import { ComparisonChart } from '../components/ComparisonChart'
import { LoadingSpinner } from '../components/LoadingSpinner'

export function InsightsPage() {
  const [selectedCoins, setSelectedCoins] = useState(['90', '80']) // Bitcoin and Ethereum IDs
  const [coinData, setCoinData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCoinData = async () => {
      const data = {}
      for (const coin of selectedCoins) {
        const response = await fetch(`https://api.coinlore.net/api/ticker/?id=${coin}`)
        const coinInfo = await response.json()
        data[coin] = coinInfo[0]
      }
      setCoinData(data)
      setLoading(false)
    }

    fetchCoinData()
  }, [selectedCoins])

  if (loading) return <LoadingSpinner />

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-purple-800">Market Insights</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PriceChart coinData={coinData} />
        <ComparisonChart coinData={coinData} />
      </div>
    </div>
  )
}

