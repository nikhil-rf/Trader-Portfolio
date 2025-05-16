import React from 'react';

function TradeCard({ title, points }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="h-56 bg-gray-200"></div>
      <div className="p-6">
        <h4 className="text-xl font-semibold mb-4">{title}</h4>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          {points.map((point, i) => <li key={i}>{point}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default TradeCard;
