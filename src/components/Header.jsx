// import React from 'react';
// import logo from '../assets/logo.svg';

// function Header() {
//   return (
//     <nav className="flex items-center justify-between px-10 py-4 shadow-md bg-white">
//       <div className="text-green-700 font-bold text-xl">
//         <img src={logo} alt="Logo" className="h-10" />
//       </div>
//       <ul className="flex space-x-8 text-gray-600 font-medium">
//         <li className="hover:text-green-700 cursor-pointer">Home</li>
//         <li className="hover:text-green-700 cursor-pointer">Resources</li>
//         <li className="hover:text-green-700 cursor-pointer">Trading Recap</li>
//         <li className="hover:text-green-700 cursor-pointer">Blog</li>
//         <li className="hover:text-green-700 cursor-pointer">Contact</li>
//       </ul>
//       <button style={{ backgroundColor: '#2C5530' }} className=" text-white px-4 py-2 rounded-md hover:bg-green-900 mr-18">
//         Book a Consultation
//       </button>
//     </nav>
//   );
// }

// export default Header;






import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { Menu, X } from 'lucide-react'; 

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex items-center justify-between">
        <img src={logo} alt="Logo" className="h-10" />

        <ul className="hidden md:flex space-x-6 text-gray-600 font-medium">
          <li className="hover:text-green-700 cursor-pointer">Home</li>
          <li className="hover:text-green-700 cursor-pointer">Resources</li>
          <li className="hover:text-green-700 cursor-pointer">Trading Recap</li>
          <li className="hover:text-green-700 cursor-pointer">Blog</li>
          <li className="hover:text-green-700 cursor-pointer">Contact</li>
        </ul>

        <button
          style={{ backgroundColor: '#2C5530' }}
          className="hidden md:block text-white px-4 py-2 rounded-md hover:bg-green-900"
        >
          Book a Consultation
        </button>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <ul className="flex flex-col gap-2 text-gray-600 font-medium">
            <li className="hover:text-green-700 cursor-pointer">Home</li>
            <li className="hover:text-green-700 cursor-pointer">Resources</li>
            <li className="hover:text-green-700 cursor-pointer">Trading Recap</li>
            <li className="hover:text-green-700 cursor-pointer">Blog</li>
            <li className="hover:text-green-700 cursor-pointer">Contact</li>
          </ul>
          <button
            style={{ backgroundColor: '#2C5530' }}
            className="text-white w-full px-4 py-2 rounded-md hover:bg-green-900"
          >
            Book a Consultation
          </button>
        </div>
      )}
    </nav>
  );
}

export default Header;
