import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // 1. We catch the exact plan passed from the Pricing page here.
  // If someone visits /checkout directly without clicking a plan, we default to the Pro Plan safely.
  const selectedPlan = location.state?.plan || { 
    name: "Pro Plan", 
    price: "$19",
    period: "/month"
  };

  const [phoneNumber, setPhoneNumber] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'processing' | 'success'

  const handlePayment = (e) => {
    e.preventDefault();
    
    // Simulate payment processing
    setStatus('processing');
    
    setTimeout(() => {
      setStatus('success');
      // Redirect to dashboard after showing success message
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl w-full max-w-md border border-slate-100">
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold text-slate-900">Complete Payment</h2>
          <p className="text-slate-500 mt-2 text-sm">Secure checkout powered by EVC Plus</p>
        </div>

        {/* Dynamic Plan Summary Box */}
        <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-2xl mb-8">
          <p className="text-sm text-indigo-600 font-bold uppercase tracking-wider mb-1">Selected Plan</p>
          <div className="flex justify-between items-end">
            <h3 className="text-xl font-bold text-slate-900">{selectedPlan.name}</h3>
            <div className="text-right">
              <span className="text-3xl font-extrabold text-slate-900">{selectedPlan.price}</span>
              <span className="text-slate-500 font-medium">{selectedPlan.period}</span>
            </div>
          </div>
        </div>
        
        {/* Payment Form */}
        {status === 'idle' && (
          <form onSubmit={handlePayment} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                EVC Plus Number
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500 font-bold">
                  252
                </span>
                <input 
                  type="tel" 
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="61XXXXXXX"
                  className="w-full pl-14 p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium text-slate-900" 
                  required
                  pattern="[0-9]{9}"
                  title="Please enter a valid 9-digit number starting with 61"
                />
              </div>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition"
            >
              Pay {selectedPlan.price} Now
            </button>
            
            <button 
              type="button"
              onClick={() => navigate('/pricing')}
              className="w-full text-slate-500 font-semibold hover:text-slate-700 transition"
            >
              Cancel and go back
            </button>
          </form>
        )}
        
        {/* Loading State */}
        {status === 'processing' && (
          <div className="py-8 text-center flex flex-col items-center space-y-4">
            <div className="w-12 h-12 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin"></div>
            <p className="text-lg font-bold text-slate-700">Processing Payment...</p>
            <p className="text-sm text-slate-500">Please check your phone for the USSD prompt.</p>
          </div>
        )}

        {/* Success State */}
        {status === 'success' && (
          <div className="py-8 text-center flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-2">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-xl font-extrabold text-emerald-600">Payment Successful!</p>
            <p className="text-sm text-slate-500">Redirecting to your dashboard...</p>
          </div>
        )}

      </div>
    </div>
  );
}