import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutDashboard, FolderKanban, CreditCard, Settings, Bell, Search, Users, CheckSquare } from 'lucide-react';

export default function MainLayout() {
  const location = useLocation();
  
  // Halkan ayaan ku saxnay linkiyada (Paths) si ay ula shaqeeyaan '/dashboard'
  const navItems = [
    { name: 'Overview', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Projects', path: '/dashboard/projects', icon: FolderKanban },
    { name: 'Tasks', path: '/dashboard/tasks', icon: CheckSquare }, // Bogga cusub ee Kanban-ka
    { name: 'Finance', path: '/dashboard/finance', icon: CreditCard },
    { name: 'Customers', path: '/dashboard/customers', icon: Users },
    { name: 'Settings', path: '/dashboard/settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-[#F8FAFC] text-slate-900 font-sans overflow-hidden">
      {/* Sidebar - Naqshad Casri ah */}
      <aside className="w-64 bg-white/80 backdrop-blur-xl border-r border-slate-200 flex flex-col justify-between hidden md:flex z-10">
        <div>
          <div className="h-20 flex items-center px-8 border-b border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="ml-3 font-extrabold text-xl tracking-tight text-slate-800">SaaSFlow</span>
          </div>
          
          <nav className="p-4 space-y-1">
            {navItems.map((item) => {
              // Hubin haddii linkigan uu yahay midka hadda furan (Active)
              const isActive = location.pathname === item.path || (item.path !== '/dashboard' && location.pathname.startsWith(item.path));
              const Icon = item.icon;
              
              return (
                <Link key={item.name} to={item.path} className="relative block">
                  {isActive && (
                    <motion.div layoutId="activeNav" className="absolute inset-0 bg-indigo-50 rounded-xl" />
                  )}
                  <div className={`relative flex items-center px-4 py-3 rounded-xl transition-colors ${isActive ? 'text-indigo-600 font-bold' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50 font-medium'}`}>
                    <Icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>
        
        {/* Qaybta Profile-ka Isticmaalaha ee Hoose */}
        <div className="p-4 border-t border-slate-100">
          <Link to="/" className="flex items-center p-3 rounded-xl hover:bg-slate-50 transition cursor-pointer text-slate-600 hover:text-slate-900">
            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
            <div className="ml-3">
              <p className="text-sm font-bold">Admin User</p>
              <p className="text-xs text-slate-500">Log out</p>
            </div>
          </Link>
        </div>
      </aside>

      {/* Qaybta Weyn ee Bogga (Main Content Area) */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 z-10">
          <div className="relative w-96">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search tasks, projects, or users..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full focus:ring-2 focus:ring-indigo-500 outline-none transition-all" 
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-slate-600 bg-white rounded-full border border-slate-200">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-10 h-10 md:hidden rounded-full border-2 border-white shadow-sm" />
          </div>
        </header>

        {/* Meesha ay kusoo baxayaan bogagga Dashboard-ka dhexdiisa ah */}
        <main className="flex-1 overflow-y-auto p-8 scroll-smooth">
          <Outlet />
        </main>
      </div>
    </div>
  );
}