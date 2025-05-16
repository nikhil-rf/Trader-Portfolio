import React from 'react';

function Hero() {
  return (
    <section className="relative bg-green-50 py-16 px-10 flex justify-between items-center">
      <div className="relative bg-white shadow-md p-10 rounded-lg max-w-xl">
        <h1 class="text-4xl font-bold mb-4">
  <span class="text-[#1F5F4B]">TRADE LESS,</span><br />
  <span class="text-green-700">TRADE SIMPLE</span>
</h1>

        <p className="text-green-700 italic text-lg">
          " We could post our trading rules on the front page of the Wall Street Journal, and still people would not be able to make money from them. "
        </p>

        <p className="text-right text-sm text-green-700 mt-4">- Richard Dennis</p>
        <button className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md">
          ‹
        </button>
        <button className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md">
          ›
        </button>
        
        <div className="flex justify-center space-x-2 mt-6">
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>

      <div className="ml-10">
        <div className="w-64 h-96 bg-white rounded-xl overflow-hidden shadow-lg relative">
          <img
            src=""
            alt="Expert"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <h3 className="text-white font-semibold text-lg">Expert Trading Guidance</h3>
            <p className="text-white text-sm">Simplify your trading journey with our proven strategies</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
