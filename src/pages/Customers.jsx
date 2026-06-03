import React from 'react';
import { motion } from 'framer-motion';
import { Search, MoreVertical, Mail, Edit2, Trash2 } from 'lucide-react';

export default function Customers() {
  const customers = [
    { id: 1, name: 'Ahmed Ali', email: 'ahmed@example.com', plan: 'Pro', status: 'Active', avatar: 'https://i.pravatar.cc/150?img=11' },
    { id: 2, name: 'Sarah Mohamed', email: 'sarah@example.com', plan: 'Basic', status: 'Inactive', avatar: 'https://i.pravatar.cc/150?img=5' },
    { id: 3, name: 'Hassan Nur', email: 'hassan@example.com', plan: 'Enterprise', status: 'Active', avatar: 'https://i.pravatar.cc/150?img=8' },
    { id: 4, name: 'Fatima Abdi', email: 'fatima@example.com', plan: 'Pro', status: 'Active', avatar: 'https://i.pravatar.cc/150?img=9' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 h-full flex flex-col">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Customers</h1>
          <p className="text-slate-500 mt-1">Manage your clients and their subscription statuses.</p>
        </div>
        <div className="relative w-full md:w-64">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input type="text" placeholder="Search customers..." className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex-1">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm">
                <th className="p-4 font-semibold pl-6">Customer</th>
                <th className="p-4 font-semibold">Plan</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold text-right pr-6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, idx) => (
                <tr key={customer.id} className="border-b border-slate-100 hover:bg-slate-50/50 transition last:border-0">
                  <td className="p-4 pl-6">
                    <div className="flex items-center gap-3">
                      <img src={customer.avatar} alt={customer.name} className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <p className="font-bold text-slate-900">{customer.name}</p>
                        <p className="text-sm text-slate-500 flex items-center gap-1">
                          <Mail className="w-3 h-3" /> {customer.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="font-semibold text-slate-700">{customer.plan}</span>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${customer.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="p-4 pr-6 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-slate-400 hover:text-indigo-600 transition bg-white rounded-lg border border-slate-200 shadow-sm"><Edit2 className="w-4 h-4" /></button>
                      <button className="p-2 text-slate-400 hover:text-red-500 transition bg-white rounded-lg border border-slate-200 shadow-sm"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}