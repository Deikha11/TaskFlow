import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, MoreHorizontal, Clock, CheckCircle2, Circle } from 'lucide-react';

export default function Tasks() {
  // Tusaale Xogta Tasks-ka
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Fix navigation bug', desc: 'Header overlaps on mobile screens.', status: 'todo', priority: 'High' },
    { id: 2, title: 'Integrate EVC Plus', desc: 'Connect the merchant API to checkout.', status: 'inProgress', priority: 'Urgent' },
    { id: 3, title: 'Design Landing Page', desc: 'Create glassmorphism heroes.', status: 'done', priority: 'Medium' },
    { id: 4, title: 'Update User Schema', desc: 'Add trial_ends_at field to database.', status: 'todo', priority: 'Low' },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [activeColumn, setActiveColumn] = useState(null);

  // Gacan ku haynta bedelida status-ka task-ga
  const moveTask = (taskId, newStatus) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, status: newStatus } : task));
  };

  const addTask = (e, status) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      desc: 'New task description...',
      status: status,
      priority: 'Medium'
    };
    setTasks([newTask, ...tasks]);
    setNewTaskTitle('');
    setActiveColumn(null);
  };

  const columns = [
    { id: 'todo', title: 'To Do', icon: Circle, color: 'text-slate-500', bg: 'bg-slate-100' },
    { id: 'inProgress', title: 'In Progress', icon: Clock, color: 'text-blue-500', bg: 'bg-blue-100' },
    { id: 'done', title: 'Done', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-100' },
  ];

  return (
    <div className="max-w-7xl mx-auto h-full flex flex-col">
      <div className="flex justify-between items-end mb-8 shrink-0">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Tasks Board</h1>
          <p className="text-slate-500 mt-1">Manage your team's workflow and track progress.</p>
        </div>
      </div>

      <div className="flex-1 overflow-x-auto pb-4">
        <div className="flex gap-6 h-full items-start min-w-[900px]">
          {columns.map((col) => (
            <div key={col.id} className="flex-1 w-80 bg-slate-50/50 rounded-3xl p-5 border border-slate-200 shadow-sm flex flex-col max-h-full">
              {/* Column Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-lg ${col.bg}`}>
                    <col.icon className={`w-4 h-4 ${col.color}`} strokeWidth={3} />
                  </div>
                  <h3 className="font-bold text-slate-900">{col.title}</h3>
                  <span className="bg-slate-200 text-slate-600 text-xs font-bold px-2 py-0.5 rounded-full ml-2">
                    {tasks.filter(t => t.status === col.id).length}
                  </span>
                </div>
                <button className="text-slate-400 hover:text-slate-700 transition"><MoreHorizontal className="w-5 h-5" /></button>
              </div>

              {/* Tasks List */}
              <div className="flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar">
                {tasks.filter(task => task.status === col.id).map((task, index) => (
                  <motion.div 
                    key={task.id} 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: index * 0.05 }}
                    className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 group hover:border-indigo-300 transition-colors relative cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md
                        ${task.priority === 'Urgent' ? 'bg-red-100 text-red-700' : 
                          task.priority === 'High' ? 'bg-orange-100 text-orange-700' : 
                          'bg-slate-100 text-slate-600'}`}>
                        {task.priority}
                      </span>
                      {/* Qaybta bedelida column-ka oo soo muuqanaysa markaad mouse-ka saarto */}
                      <div className="opacity-0 group-hover:opacity-100 transition flex gap-1 bg-white shadow-sm border border-slate-100 rounded-lg p-1 absolute right-2 top-2">
                        {columns.filter(c => c.id !== col.id).map(targetCol => (
                          <button 
                            key={targetCol.id} 
                            onClick={() => moveTask(task.id, targetCol.id)}
                            className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-indigo-600"
                            title={`Move to ${targetCol.title}`}
                          >
                            <targetCol.icon className="w-3.5 h-3.5" />
                          </button>
                        ))}
                      </div>
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm">{task.title}</h4>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">{task.desc}</p>
                  </motion.div>
                ))}

                {/* Add Task Input */}
                {activeColumn === col.id ? (
                  <form onSubmit={(e) => addTask(e, col.id)} className="mt-3">
                    <input 
                      type="text" 
                      value={newTaskTitle} 
                      onChange={(e) => setNewTaskTitle(e.target.value)}
                      placeholder="What needs to be done?" 
                      className="w-full text-sm p-3 rounded-xl border border-indigo-200 focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm"
                      autoFocus
                      onBlur={() => {
                        if(!newTaskTitle) setActiveColumn(null);
                      }}
                    />
                  </form>
                ) : (
                  <button 
                    onClick={() => setActiveColumn(col.id)} 
                    className="w-full mt-3 py-3 rounded-xl border-2 border-dashed border-slate-200 text-slate-500 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50/50 transition flex items-center justify-center gap-2 font-semibold text-sm"
                  >
                    <Plus className="w-4 h-4" /> Add Task
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}