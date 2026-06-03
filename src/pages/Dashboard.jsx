import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingUp, Users, Activity } from 'lucide-react';

const revenueData = [
  { name: 'Jan', value: 4000 }, { name: 'Feb', value: 3000 }, { name: 'Mar', value: 6000 },
  { name: 'Apr', value: 8000 }, { name: 'May', value: 7500 }, { name: 'Jun', value: 12000 },
];

const StatCard = ({ title, value, trend, icon: Icon }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
    className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100"
  >
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm font-semibold text-slate-500">{title}</p>
        <h3 className="text-3xl font-extrabold text-slate-900 mt-2">{value}</h3>
      </div>
      <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
        <Icon className="w-6 h-6" />
      </div>
    </div>
    <div className="mt-4 flex items-center text-sm">
      <span className="text-emerald-500 font-bold flex items-center gap-1">
        <TrendingUp className="w-4 h-4" /> {trend}
      </span>
      <span className="text-slate-400 ml-2">vs last month</span>
    </div>
  </motion.div>
);

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Dashboard Overview</h1>
          <p className="text-slate-500 mt-1">Here is what's happening with your business today.</p>
        </div>
        <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg shadow-slate-900/20 hover:bg-slate-800 transition">
          Download Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Revenue" value="$48,290.00" trend="+12.5%" icon={Activity} />
        <StatCard title="Active Users" value="2,405" trend="+5.2%" icon={Users} />
        <StatCard title="Active Projects" value="18" trend="+2.4%" icon={TrendingUp} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-2 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Revenue Growth</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                <Area type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Recent Activity</h3>
          <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <span className="text-slate-500 font-bold">{i}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Payment received</p>
                  <p className="text-xs text-slate-500 mt-1">Stripe payment for Pro Plan - $19.00</p>
                  <p className="text-xs text-slate-400 mt-1">{i} hour(s) ago</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}