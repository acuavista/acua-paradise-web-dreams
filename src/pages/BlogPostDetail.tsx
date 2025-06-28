import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPostDetail = () => {
  const { slug } = useParams(); // This hook gets the 'slug' from the URL

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-center">
        Blog Post: {slug ? slug.replace(/-/g, ' ') : 'Loading...'}
      </h1>
      <p className="text-xl text-white/80 max-w-3xl mx-auto text-center">
        This is where the full content of "{slug ? slug.replace(/-/g, ' ') : 'this article'}" will go.
      </p>
      <p className="text-white/60 mt-4">
        (Coming soon: detailed article content!)
      </p>
      <a href="/" className="mt-8 text-blue-400 hover:text-blue-300 transition-colors flex items-center">
        Go back to Home
      </a>
    </div>
  );
};

export default BlogPostDetail;
