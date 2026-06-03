import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Mail, Edit2, Trash2, Filter, Users } from 'lucide-react';

export default function Customers() {
  // 1. Xogta Macaamiisha (oo wadata sawiradooda)
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Ahmed Ali', email: 'ahmed@example.com', plan: 'Pro', status: 'Active', avatar: 'https://i.pravatar.cc/150?img=11' },
    { id: 2, name: 'Sarah Mohamed', email: 'sarah@example.com', plan: 'Basic', status: 'Inactive', avatar: 'https://i.pravatar.cc/150?img=5' },
    { id: 3, name: 'Hassan Nur', email: 'hassan@example.com', plan: 'Enterprise', status: 'Active', avatar: 'https://i.pravatar.cc/150?img=8' },
    { id: 4, name: 'Fatima Abdi', email: 'fatima@example.com', plan: 'Pro', status: 'Active', avatar: 'https://i.pravatar.cc/150?img=9' },
  ]);

  // States-ka maamulaya Filter-ka iyo Search-ka
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('All');

  // 2. Filter-ka Caqliga leh (Wuxuu isku dhex raddayaa magaca, emailka iyo Plan-ka)
  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          customer.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesPlan = selectedPlan === 'All' || customer.plan === selectedPlan;

    return matchesSearch && matchesPlan;
  });

  const planTypes = ['All', 'Basic', 'Pro', 'Enterprise'];

  return (
    <div className="max-w-7xl mx-auto space-y-8 h-full flex flex-col">
      {/* Qaybta Sare / Main Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 shrink-0">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Customers Management</h1>
          <p className="text-slate-500 mt-1">Monitor subscriptions, plans, and customer activity in real-time.</p>
        </div>
        
        {/* Input-ka Raadinta (Search) */}
        <div className="relative w-full md:w-80">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search name or email..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none shadow-sm transition-all" 
          />
        </div>
      </div>

      {/* Qaybta Filter Chips-ka (Badhamada lagu kala saaro plans-ka) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 shrink-0">
        <div className="flex items-center gap-1.5 text-slate-400 mr-2 text-sm font-semibold">
          <Filter className="w-4 h-4" /> Filter by:
        </div>
        {planTypes.map((plan) => (
          <button
            key={plan}
            onClick={() => setSelectedPlan(plan)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all relative ${
              selectedPlan === plan 
                ? 'text-white bg-indigo-600 shadow-sm shadow-indigo-100' 
                : 'text-slate-600 bg-white border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {plan}
            {/* Number-ka yar ee tusaya inta ku dhex jirta plan kasta */}
            <span className={`ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] ${
              selectedPlan === plan ? 'bg-indigo-700 text-indigo-100' : 'bg-slate-100 text-slate-500'
            }`}>
              {plan === 'All' ? customers.length : customers.filter(c => c.plan === plan).length}
            </span>
          </button>
        ))}
      </div>

      {/* Jadwalka Macaamiisha (Table) */}
      <motion.div 
        layout
        className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex-1 flex flex-col min-h-[300px]"
      >
        <div className="overflow-x-auto flex-1">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm">
                <th className="p-4 font-semibold pl-6">Customer</th>
                <th className="p-4 font-semibold">Plan Type</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold text-right pr-6">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <AnimatePresence mode="popLayout">
                {filteredCustomers.length > 0 ? (
                  filteredCustomers.map((customer) => (
                    <motion.tr 
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      key={customer.id} 
                      className="hover:bg-slate-50/50 transition-colors bg-white group"
                    >
                      {/* Customer Name & Avatar */}
                      <td className="p-4 pl-6">
                        <div className="flex items-center gap-3">
                          <img src={customer.avatar} alt={customer.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100 shadow-sm" />
                          <div>
                            <p className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{customer.name}</p>
                            <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                              <Mail className="w-3 h-3" /> {customer.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      
                      {/* Plan Type Badge */}
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-lg text-xs font-bold
                          ${customer.plan === 'Enterprise' ? 'bg-purple-50 text-purple-700 border border-purple-200' : 
                            customer.plan === 'Pro' ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' : 
                            'bg-slate-50 text-slate-700 border border-slate-200'}`}>
                          {customer.plan}
                        </span>
                      </td>
                      
                      {/* Status */}
                      <td className="p-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                          customer.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-600'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${customer.status === 'Active' ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                          {customer.status}
                        </span>
                      </td>
                      
                      {/* Actions */}
                      <td className="p-4 pr-6 text-right">
                        <div className="flex justify-end gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-slate-50 transition rounded-xl border border-slate-200/60 shadow-sm bg-white">
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition rounded-xl border border-slate-200/60 shadow-sm bg-white">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  // Haddii la waayo qof buuxiya filter-ka
                  <motion.tr initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <td colSpan="4" className="text-center py-20 text-slate-400">
                      <Users className="w-10 h-10 mx-auto text-slate-300 stroke-[1.5] mb-3" />
                      <p className="font-semibold text-slate-500">No customers found</p>
                      <p className="text-xs text-slate-400 mt-1">Try adjusting your keywords or filters.</p>
                    </td>
                  </motion.tr>
                )}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}