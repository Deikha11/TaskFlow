import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-extrabold text-center mb-2 text-slate-900">Create Account</h2>
        <p className="text-center text-slate-500 mb-8">Join thousands of users today.</p>
        <form onSubmit={(e) => { e.preventDefault(); navigate('/checkout'); }} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <input type="text" placeholder="John Doe" required className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input type="email" placeholder="john@example.com" required className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input type="password" placeholder="••••••••" required className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700">Sign Up</button>
        </form>
        <p className="mt-6 text-center text-slate-500">Already have an account? <Link to="/login" className="text-indigo-600 font-medium">Sign in</Link></p>
      </div>
    </div>
  );
}