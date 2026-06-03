import React, { useState } from 'react';

export default function Hero() {
  // Live demo interactive application state
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Design new landing page UI', completed: true },
    { id: 2, text: 'Generate AI graphics for hero section', completed: false },
    { id: 3, text: 'Review feedback with engineering team', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <section id="hero" className="pt-28 pb-20 md:pt-36 md:pb-32 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50 via-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* Left: Copywriting */}
        <div className="lg:w-1/2 text-center lg:text-left z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 mb-5 border border-indigo-100">
            ✨ Next-Gen Project Management
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-950 tracking-tight leading-none mb-6">
            Run your team's work in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">one beautiful place</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
            TaskFlow centralizes your projects, streamlines communication, and handles real-time reporting so your team can build faster without the clutter.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a href="#pricing" className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-md font-semibold hover:bg-indigo-700 shadow-xl shadow-indigo-600/10 hover:shadow-indigo-600/20 transition-all text-center">
              Try It Free Now
            </a>
            <a href="#features" className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl text-md font-semibold hover:bg-slate-50 transition text-center flex items-center justify-center gap-2">
              Explore Features
            </a>
          </div>
        </div>

        {/* Right: Real Interactive Demo App Container */}
        <div className="lg:w-1/2 w-full max-w-xl lg:max-w-none">
          <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/80 border border-slate-100 p-6 relative">
            <div className="absolute -top-3 -left-3 bg-violet-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg rotate-[-3deg]">
              🔥 LIVE FRONT-END DEMO
            </div>
            
            {/* App Header Header */}
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-100">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">My Active Workspace</h3>
                <p className="text-xs text-slate-400">Manage, test and build dynamically</p>
              </div>
              <span className="bg-indigo-50 text-indigo-600 text-xs font-bold px-2.5 py-1 rounded-md">
                {tasks.filter(t => !t.completed).length} Tasks Left
              </span>
            </div>

            {/* Live Interactive Task List */}
            <div className="space-y-2.5 max-h-64 overflow-y-auto mb-4 pr-1">
              {tasks.map((task) => (
                <div key={task.id} className={`flex items-center justify-between p-3 rounded-xl transition border ${task.completed ? 'bg-slate-50/50 border-slate-100' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <div className="flex items-center space-x-3 flex-1 min-w-0">
                    <button 
                      onClick={() => toggleTask(task.id)}
                      className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${task.completed ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-300 hover:border-indigo-500'}`}
                    >
                      {task.completed && <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}> <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /> </svg>}
                    </button>
                    <span className={`text-sm truncate font-medium ${task.completed ? 'line-through text-slate-400' : 'text-slate-700'}`}>
                      {task.text}
                    </span>
                  </div>
                  <button onClick={() => deleteTask(task.id)} className="text-slate-300 hover:text-rose-500 p-1 transition">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                </div>
              ))}
              {tasks.length === 0 && (
                <p className="text-center text-slate-400 py-6 text-sm">No tasks left! Add a new one below. 🎉</p>
              )}
            </div>

            {/* Live Interactive Task Input Form */}
            <form onSubmit={handleAddTask} className="flex gap-2">
              <input 
                type="text" 
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Type a new high priority task..." 
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50"
              />
              <button type="submit" className="bg-indigo-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-indigo-700 shadow-md transition whitespace-nowrap">
                Add Task
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}