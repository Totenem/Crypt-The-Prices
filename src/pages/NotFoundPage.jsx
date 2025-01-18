import React from 'react';

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-purple-800">404</h1>
      <p className="text-2xl text-gray-700">Page Not Found</p>
      <p className="text-gray-500">The page you are looking for does not exist.</p>
    </div>
  );
} 