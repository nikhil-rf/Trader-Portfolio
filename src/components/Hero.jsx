import React from 'react';
import leftArrow from '../assets/left-arrow.svg';
import rightArrow from '../assets/right-arrow.svg';
import manpic from '../assets/man.jpg'

function Hero() {
  return (
    <section className="relative bg-green-50 py-10 px-4 md:py-16 md:px-10">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className="relative bg-white shadow-md p-6 md:p-10 rounded-lg w-full md:max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="text-[#2C5530]">TRADE LESS,</span><br />
            <span className="text-green-700">TRADE SIMPLE</span>
          </h1>

          <p className="text-green-700 italic text-base md:text-lg">
            " We could post our trading rules on the front page of the Wall Street Journal, and still people would not be able to make money from them. "
          </p>

          <p className="text-right text-sm text-green-700 mt-4">- Richard Dennis</p>

          <button className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-md bg-white">
            <img src={leftArrow} alt="Left Arrow" className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          <button className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-md bg-white">
            <img src={rightArrow} alt="Right Arrow" className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          <div className="flex justify-center space-x-2 mt-6">
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        <div className="w-full md:w-[280px] md:-ml-6">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg relative w-full h-80">
            <img src={manpic} alt="Expert" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h3 className="text-white font-semibold text-lg">Expert Trading Guidance</h3>
              <p className="text-white text-sm">Simplify your trading journey with our proven strategies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
