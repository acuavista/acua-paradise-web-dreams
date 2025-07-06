import React from 'react';
import { Link } from 'react-router-dom';

const WhyNow = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <Link to="/" className="text-blue-600 hover:underline mb-4 block">&larr; Back to Home</Link>
        <h1 className="text-4xl font-bold mb-6">Why Now? The Time is Ripe for Opportunity</h1>
        <img 
          src="/public/images/tropical-paradise.jpg" // You can change this path later to a specific image for this article
          alt="Opportunity" 
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Timing is often everything, and for certain opportunities, the moment is now.
          Whether it's a unique market condition, a specific economic trend, or a window
          of favorable regulations, acting decisively can unlock benefits that may not
          be available later. Delay can mean missed opportunities, higher costs, or
          increased competition.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          In many emerging markets and specific investment sectors, current conditions
          present a compelling case for immediate action. Interest rates, development
          phases, and global demand can align to create a perfect storm of opportunity.
          Understanding these factors and being prepared to move can put you at a significant
          advantage, securing your future gains before the landscape shifts. Don't let
          procrastination be the thief of your potential.
        </p>
      </div>
    </div>
  );
};

export default WhyNow;
