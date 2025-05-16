import React from 'react';

function Header() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 shadow-md bg-white">
      <div className="text-green-700 font-bold text-xl">
        <img src="" alt="Logo" className="h-10" />
      </div>
      <ul className="flex space-x-8 text-gray-700 font-medium">
        <li className="hover:text-green-700 cursor-pointer">Home</li>
        <li className="hover:text-green-700 cursor-pointer">Resources</li>
        <li className="hover:text-green-700 cursor-pointer">Trading Recap</li>
        <li className="hover:text-green-700 cursor-pointer">Blog</li>
        <li className="hover:text-green-700 cursor-pointer">Contact</li>
      </ul>
      <button className="bg-green-800 text-white px-4 py-2 rounded-md hover:bg-green-900">
        Book a Consultation
      </button>
    </nav>
  );
}

export default Header;
