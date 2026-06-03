import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, ArrowUpRight, ArrowDownRight, CreditCard } from 'lucide-react';

export default function Finance() {
  const transactions = [
    { id: 'TRX-101', desc: 'Pro Plan Subscription', amount: '-$19.00', date: 'Today, 2:45 PM', type: 'out' },
    { id: 'TRX-102', desc: 'Client Payment', amount: '+$1,250.00', date: 'Yesterday', type: 'in' },
    { id: 'TRX-103', desc: 'Server Hosting', amount: '-$45.00', date: 'Oct 20, 2024', type: 'out' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Finance & Billing</h1>
          <p className="text-slate-500 mt-1">Manage your revenue, expenses, and EVC Plus payments.</p>
        </div>
        <button className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-slate-800 transition">
          <CreditCard className="w-5 h-5" /> Manage Billing
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Balance Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-gradient-to-br from-indigo-900 to-slate-900 p-8 rounded-3xl text-white shadow-xl">
          <p className="text-indigo-200 font-medium">Available Balance</p>
          <h2 className="text-5xl font-extrabold mt-2 mb-8">$12,450.00</h2>
          <div className="flex gap-4">
            <button className="flex-1 bg-white/10 hover:bg-white/20 transition py-3 rounded-xl font-bold flex justify-center items-center gap-2">
              <ArrowDownRight className="w-5 h-5" /> Withdraw
            </button>
            <button className="flex-1 bg-indigo-500 hover:bg-indigo-400 transition py-3 rounded-xl font-bold flex justify-center items-center gap-2">
              <ArrowUpRight className="w-5 h-5" /> Add Funds
            </button>
          </div>
        </motion.div>

        {/* Recent Transactions List */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Recent Transactions</h3>
          <div className="space-y-4">
            {transactions.map((trx, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${trx.type === 'in' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{trx.desc}</h4>
                    <p className="text-xs text-slate-500 mt-1">{trx.date} • {trx.id}</p>
                  </div>
                </div>
                <span className={`font-extrabold text-lg ${trx.type === 'in' ? 'text-emerald-600' : 'text-slate-900'}`}>
                  {trx.amount}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}