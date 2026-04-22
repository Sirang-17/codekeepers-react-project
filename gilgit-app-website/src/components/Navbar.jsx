import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg px-4 py-4 sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-2xl font-bold text-gray-900" to="/">Gilgit.App</Link>
        <div className="hidden md:flex space-x-6">
          <Link className="text-gray-700 hover:text-blue-500 font-medium px-3 py-2 rounded transition" to="/">Home</Link>
          <Link className="text-gray-700 hover:text-blue-500 font-medium px-3 py-2 rounded transition" to="/about">About</Link>
        </div>
        <button 
          className="md:hidden p-1 rounded-md focus:outline-none focus:shadow-outline"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden pb-4">
          <Link className="block px-3 py-2 text-gray-700 hover:text-blue-500 font-medium rounded transition mt-2" to="/">Home</Link>
          <Link className="block px-3 py-2 text-gray-700 hover:text-blue-500 font-medium rounded transition" to="/about">About</Link>
        </div>
      )}
    </nav>
  );
}
