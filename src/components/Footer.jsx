import React from 'react';
import logo from '../assets/logo.svg';
import { Youtube, Linkedin, Facebook, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src={logo}  alt="Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold">Trader</span>
          </div>
          <p className="text-sm text-gray-300">
            Transforming engineers and analytical minds into consistent, profitable traders.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Home</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Trading Recap</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Pricing</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Stay connected and keep learning!</h4>
          <div className="flex space-x-4 mt-2">
            <a href="#"><Youtube className="text-white hover:text-gray-400" /></a>
            <a href="#"><Linkedin className="text-white hover:text-gray-400" /></a>
            <a href="#"><Facebook className="text-white hover:text-gray-400" /></a>
            <a href="#"><Instagram className="text-white hover:text-gray-400" /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        Copyright©2025 Spanish Learning Hub. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
