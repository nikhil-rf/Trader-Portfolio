import React from 'react';
import TradeCard from './what/TradeCard';
import Resource1 from '../assets/resource1.jpg';
import Resource2 from '../assets/resource2.jpg';


function What() {
  const tradeInfo = [
  {
    title: "Stock/Equity Trading",
    points: [
      "Focus on large-cap stocks with high liquidity",
      "Technical analysis combined with fundamental catalysts",
      "Risk management through position sizing and stop-losses",
      "Swing trading opportunities for longer-term positions"
    ],
    image: Resource1, 
  },
  {
    title: "Day Trading",
    points: [
      "Short-term opportunities in volatile markets",
      "Price action and volume analysis",
      "Scalping and momentum trading strategies",
      "Real-time market analysis and quick decision making"
    ],
    image: Resource2, 
  }
];


  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1F5F4B] mb-4">What I Trade</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
        My trading approach focuses on two main areas: Stock/Equity trading and Day Trading. Each requires different strategies and mindsets.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tradeInfo.map((info, idx) => <TradeCard key={idx} {...info} />)}
      </div>
    </section>
  );
}

export default What;

