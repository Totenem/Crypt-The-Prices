import React from 'react'

export function SearchBar({ onSearch }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search by name or symbol"
        className="w-full p-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  )
}

