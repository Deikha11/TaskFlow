import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 text-white mb-4">
            <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
            <span className="text-lg font-bold tracking-tight">TaskFlow</span>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">Centralized automation engines helping high performance software engineering teams build fast.</p>
        </div>
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/#features" className="hover:text-white transition">Features</a></li>
            <li><a href="/#pricing" className="hover:text-white transition">Pricing structures</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link to="/register" className="hover:text-white transition">Join Portal</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white transition">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}