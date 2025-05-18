// import React from 'react';

// function RecapCard({ title, description, rate }) {
//   return (
//     <div className="bg-white rounded-lg shadow p-4 text-center">
//       <div className="h-40 bg-gray-100 rounded mb-4"></div>
//       <h4 className="text-lg font-semibold mb-2">{title}</h4>
//       <p className="text-sm text-gray-600 mb-2">{description}</p>
//       <p className="text-xs text-gray-500 mb-2">Success Rate: {rate}</p>
//       <a href="#" className="text-green-700 font-medium">Learn More →</a>
//     </div>
//   );
// }

// export default RecapCard;


import React from 'react';

function RecapCard({ title, description, rate, image }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      {image ? (
        <img
          src={image}
          alt={title}
          className="h-40 w-full object-cover rounded mb-4"
        />
      ) : (
        <div className="h-40 bg-gray-100 rounded mb-4"></div>
      )}
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
<div className="flex justify-between items-center text-sm mt-2 text-[#2C5530]">
  <p className="font-normal text-gray-500">Success Rate: {rate}</p>
  <a
    href="#"
    className="text-green-700 font-medium hover:underline hover:text-green-900 transition-colors"
  >
    Learn More →
  </a>
</div>


    </div>
  );
}

export default RecapCard;
