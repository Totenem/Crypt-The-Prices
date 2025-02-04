import React from 'react';
import { useParams } from 'react-router-dom';

const blogContent = {
  1: {
    title: 'Understanding Cryptocurrency',
    content: 'Cryptocurrency is a digital or virtual currency that uses cryptography for security...',
    image: 'https://example.com/image1.jpg', // Replace with actual image URL
  },
  2: {
    title: 'Top 5 Cryptocurrencies to Watch',
    content: 'In this article, we will explore the top 5 cryptocurrencies that are gaining traction...',
    image: 'https://example.com/image2.jpg', // Replace with actual image URL
  },
  3: {
    title: 'The Future of Blockchain Technology',
    content: 'Blockchain technology has the potential to revolutionize various industries...',
    image: 'https://example.com/image3.jpg', // Replace with actual image URL
  },
};

export function BlogPost() {
  const { id } = useParams();
  const post = blogContent[id];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <img src={post.image} alt={post.title} className="mb-4 rounded" />
      <h1 className="text-3xl font-bold mb-6 text-purple-800">{post.title}</h1>
      <p className="text-gray-700">{post.content}</p>
    </div>
  );
} 