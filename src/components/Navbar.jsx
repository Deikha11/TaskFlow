import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 top-0 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2 cursor-pointer">
            <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
            <span className="text-xl font-bold tracking-tight text-slate-900">TaskFlow</span>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            <a href="/#features" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition">Features</a>
            <a href="/#pricing" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition">Pricing</a>
            <Link to="/login" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition">Sign In</Link>
            <Link to="/register" className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-indigo-700 shadow-sm transition">Start Free Trial</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t px-4 pt-2 pb-4 space-y-2`}>
        <Link to="/login" onClick={() => setIsOpen(false)} className="block w-full text-left px-3 py-2 text-indigo-600 font-medium">Sign In</Link>
        <Link to="/register" onClick={() => setIsOpen(false)} className="block w-full bg-indigo-600 text-white text-center px-4 py-2.5 rounded-xl font-semibold">Start Free Trial</Link>
      </div>
    </nav>
  );
}