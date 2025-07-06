import React from 'react';
import { Link } from 'react-router-dom';

const WhyRealEstate = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <Link to="/" className="text-blue-600 hover:underline mb-4 block">&larr; Back to Home</Link>
        <h1 className="text-4xl font-bold mb-6">Why Real Estate? Your Path to Wealth and Security</h1>
        <img 
          src="/public/images/ocean-wave.jpg" // You can change this path later to a specific image for this article
          alt="Real Estate Investment" 
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Real estate has long been recognized as a cornerstone of wealth creation and financial security.
          Unlike more volatile investments, property offers tangible assets, providing both potential for appreciation
          and a steady stream of income through rentals. In a world of economic shifts,
          real estate often serves as a reliable hedge against inflation, preserving and growing your capital.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Beyond the financial benefits, owning real estate provides a unique sense of stability and control.
          It's an asset you can see, touch, and even live in. For those looking to diversify their portfolio
          or build a legacy, real estate stands out as a smart, long-term investment strategy.
          It offers significant tax advantages and can be leveraged to acquire more properties over time,
          accelerating your wealth-building journey.
        </p>
      </div>
    </div>
  );
};

export default WhyRealEstate;
