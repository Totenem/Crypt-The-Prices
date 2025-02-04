import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Cryptocurrency',
    excerpt: 'A deep dive into what cryptocurrency is and how it works.',
    image: 'https://example.com/image1.jpg', // Replace with actual image URL
  },
  {
    id: 2,
    title: 'Top 5 Cryptocurrencies to Watch',
    excerpt: 'An overview of the top 5 cryptocurrencies that are gaining traction.',
    image: 'https://example.com/image2.jpg', // Replace with actual image URL
  },
  {
    id: 3,
    title: 'The Future of Blockchain Technology',
    excerpt: 'Exploring the potential future applications of blockchain technology.',
    image: 'https://example.com/image3.jpg', // Replace with actual image URL
  },
];

export function BlogPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-purple-800">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-purple-100 p-4 rounded shadow">
            <img src={post.image} alt={post.title} className="mb-4 rounded" />
            <h2 className="text-xl font-semibold text-purple-800">{post.title}</h2>
            <p className="text-gray-700">{post.excerpt}</p>
            <Link to={`/blog/${post.id}`} className="text-purple-600 hover:underline">
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} 