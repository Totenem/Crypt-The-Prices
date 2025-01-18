import React, { useState, useEffect } from 'react'
import { CryptoTable } from '../components/CryptoTable'
import { SearchBar } from '../components/SearchBar'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { fetchCryptos } from '../api/cryptoapiresult'

export function PriceTrackerPage() {
  const [cryptos, setCryptos] = useState([])
  const [filteredCryptos, setFilteredCryptos] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [priceRange, setPriceRange] = useState({ min: '', max: '' })
  const [marketCapRank, setMarketCapRank] = useState('')
  const [tradingVolume, setTradingVolume] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCryptos(0, 100)
        setCryptos(data.data)
        setFilteredCryptos(data.data)
      } catch (error) {
        setError("Failed to fetch data")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleSearch = (term) => {
    setSearchTerm(term)
    filterCryptos(term, priceRange, marketCapRank, tradingVolume)
  }

  const handlePriceRangeChange = (e) => {
    const { name, value } = e.target
    setPriceRange((prev) => ({ ...prev, [name]: value }))
    filterCryptos(searchTerm, { ...priceRange, [name]: value }, marketCapRank, tradingVolume)
  }

  const handleMarketCapRankChange = (e) => {
    const value = e.target.value
    setMarketCapRank(value)
    filterCryptos(searchTerm, priceRange, value, tradingVolume)
  }

  const handleTradingVolumeChange = (e) => {
    const value = e.target.value
    setTradingVolume(value)
    filterCryptos(searchTerm, priceRange, marketCapRank, value)
  }

  const filterCryptos = (term, priceRange, marketCapRank, tradingVolume) => {
    const filtered = cryptos.filter((crypto) => {
      const matchesSearch = crypto.name.toLowerCase().includes(term.toLowerCase()) || 
                            crypto.symbol.toLowerCase().includes(term.toLowerCase())
      const matchesPrice = (priceRange.min === '' || parseFloat(crypto.price_usd) >= parseFloat(priceRange.min)) &&
                           (priceRange.max === '' || parseFloat(crypto.price_usd) <= parseFloat(priceRange.max))
      const matchesMarketCap = (marketCapRank === '' || crypto.rank <= parseInt(marketCapRank))
      const matchesVolume = (tradingVolume === '' || parseFloat(crypto.volume24) >= parseFloat(tradingVolume))

      return matchesSearch && matchesPrice && matchesMarketCap && matchesVolume
    })
    setFilteredCryptos(filtered)
  }

  if (loading) return <LoadingSpinner />
  if (error) return <div>{error}</div>

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-purple-800">Search and Track Prices</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="mb-4">
        <input
          type="number"
          name="min"
          placeholder="Min Price"
          value={priceRange.min}
          onChange={handlePriceRangeChange}
          className="border border-purple-300 rounded p-2 mr-2"
        />
        <input
          type="number"
          name="max"
          placeholder="Max Price"
          value={priceRange.max}
          onChange={handlePriceRangeChange}
          className="border border-purple-300 rounded p-2 mr-2"
        />
        <input
          type="number"
          placeholder="Max Market Cap Rank"
          value={marketCapRank}
          onChange={handleMarketCapRankChange}
          className="border border-purple-300 rounded p-2 mr-2"
        />
        <input
          type="number"
          placeholder="Min Trading Volume"
          value={tradingVolume}
          onChange={handleTradingVolumeChange}
          className="border border-purple-300 rounded p-2"
        />
      </div>
      <CryptoTable cryptos={filteredCryptos} />
    </div>
  )
}

