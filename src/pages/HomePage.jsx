import React, { useState, useEffect } from 'react'
import { GlobalStats } from '../components/GlobalStats'
import { TopGainersLosers } from '../components/TopGainersLosers'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { fetchGlobalStats, fetchCryptos } from '../api/cryptoapiresult'

export function HomePage() {
  const [globalStats, setGlobalStats] = useState(null)
  const [topCoins, setTopCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stats = await fetchGlobalStats()
        setGlobalStats(stats[0])

        const data = await fetchCryptos(0, 10)
        setTopCoins(data.data)
      } catch (error) {
        setError("Failed to fetch data")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <LoadingSpinner />
  if (error) return <div>{error}</div>

  return (
    <div>
      <section className="bg-purple-800 text-center py-10 mb-9">
        <h1 className="text-4xl font-bold text-white">Track Realtime Crypto Prices</h1>
      </section>
      <GlobalStats stats={globalStats} />
      <TopGainersLosers coins={topCoins} />
    </div>
  )
}

