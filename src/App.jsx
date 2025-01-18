import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { PriceTrackerPage } from './pages/PriceTrackerPage'
import { InsightsPage } from './pages/InsightsPage'
import { CoinPage } from './pages/CoinPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { Maintenance } from './pages/MaintenancePage'
import './App.css'

export function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/price-tracker" element={<PriceTrackerPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/coin/:id" element={<CoinPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/maintenance" element={<Maintenance />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

