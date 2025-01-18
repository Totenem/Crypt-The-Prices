import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { LoadingSpinner } from '../components/LoadingSpinner';

export function CoinPage() {
  const { id } = useParams(); // Get the coin ID from the URL
  const [markets, setMarkets] = useState([]);
  const [socialStats, setSocialStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        const response = await fetch(`https://api.coinlore.net/api/coin/markets/?id=${id}`);
        const data = await response.json();
        setMarkets(data.slice(0, 5)); // Get top 5 markets
      } catch (error) {
        setError("Failed to fetch markets");
      }
    };

    const fetchSocialStats = async () => {
      try {
        const response = await fetch(`https://api.coinlore.net/api/coin/social_stats/?id=${id}`);
        const data = await response.json();
        setSocialStats(data);
      } catch (error) {
        setError("Failed to fetch social stats");
      }
    };

    const fetchData = async () => {
      await Promise.all([fetchMarkets(), fetchSocialStats()]);
      setLoading(false);
    };

    fetchData();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-purple-800">Markets and Social Stats</h1>
      
      <h2 className="text-2xl font-semibold mb-4">Top Markets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {markets.map((market, index) => (
          <div 
            key={index} 
            className="bg-purple-100 shadow-lg rounded-lg p-4 transition-shadow duration-300"
          >
            <h3 className="font-semibold text-lg text-black">{market.name}</h3>
            <p className="text-black">Pair: {market.base}/{market.quote}</p>
            <p className="text-black">Price: ${market.price_usd.toFixed(2)}</p>
            <p className="text-black">Volume: ${market.volume_usd.toFixed(2)}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Social Media Stats</h2>
      <div className="bg-purple-100 shadow-lg rounded-lg p-4">
        <p className="text-black"><strong>Reddit Subscribers:</strong> {socialStats.reddit?.subscribers || 'N/A'}</p>
        <p className="text-black"><strong>Twitter Followers:</strong> {socialStats.twitter?.followers_count || 'N/A'}</p>
      </div>
    </div>
  );
} 