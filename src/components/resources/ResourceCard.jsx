import React from 'react';

function ResourceCard({ title, description }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <div className="w-full h-40 bg-gray-200 rounded mb-4"></div>
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <a href="#" className="text-green-700 font-medium mt-auto">Read More →</a>
    </div>
  );
}

export default ResourceCard;
