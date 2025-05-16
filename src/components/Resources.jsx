import React from 'react';
import ResourceCard from './resources/ResourceCard';

function Resources() {
  const cards = [
    {
      title: "The IDEAL Trading Mindset",
      description: "Discover the psychological framework that separates consistent winners from the rest."
    },
    {
      title: "Emotional Intelligence in Trading",
      description: "Learn how to recognize and manage emotions that impact your trading decisions."
    },
    {
      title: "Engineering Approach to Market Analysis",
      description: "Apply systematic engineering principles to develop robust trading strategies."
    },
    {
      title: "Weekly Market Recap - May 2025",
      description: "Analysis of recent market movements and preparation for the week ahead."
    },
    {
      title: "Risk Management Masterclass",
      description: "Essential techniques to protect your capital and maximize returns."
    },
    {
      title: "From Engineer to Trader: My Journey",
      description: "Personal insights on transitioning from engineering to full-time trading."
    }
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-3">Resources</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Access insights, strategies, and analysis to help you develop a consistent trading approach and navigate market challenges.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <ResourceCard key={idx} title={card.title} description={card.description} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-green-900 text-white px-6 py-2 rounded hover:bg-green-800">More Resources</button>
      </div>
    </section>
  );
}

export default Resources;
