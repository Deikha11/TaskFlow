import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, MoreVertical, Trash2 } from 'lucide-react';

export default function Projects() {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Website Redesign', status: 'In Progress', progress: 65, date: 'Oct 24, 2024' },
    { id: 2, name: 'Mobile App API', status: 'Completed', progress: 100, date: 'Oct 20, 2024' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');

  const handleCreate = (e) => {
    e.preventDefault();
    if (!newProjectName) return;
    setProjects([{ id: Date.now(), name: newProjectName, status: 'Planning', progress: 0, date: 'Today' }, ...projects]);
    setNewProjectName('');
    setIsModalOpen(false);
  };

  const handleDelete = (id) => setProjects(projects.filter(p => p.id !== id));

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Projects</h1>
          <p className="text-slate-500 mt-1">Manage your team's workflows and tasks.</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-indigo-700 transition">
          <Plus className="w-5 h-5" /> New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div key={project.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.1 }} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="flex justify-between items-start mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${project.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>
                {project.status}
              </span>
              <button onClick={() => handleDelete(project.id)} className="text-slate-400 hover:text-red-500 transition"><Trash2 className="w-5 h-5" /></button>
            </div>
            <h3 className="text-xl font-bold text-slate-900">{project.name}</h3>
            <p className="text-sm text-slate-500 mt-1">Due: {project.date}</p>
            <div className="mt-6">
              <div className="flex justify-between text-sm font-semibold mb-2 text-slate-700">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className={`h-2 rounded-full ${project.progress === 100 ? 'bg-emerald-500' : 'bg-indigo-600'}`} style={{ width: `${project.progress}%` }}></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50">
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-white p-8 rounded-3xl w-full max-w-md shadow-2xl">
            <h2 className="text-2xl font-bold mb-4">Create Project</h2>
            <form onSubmit={handleCreate}>
              <input type="text" value={newProjectName} onChange={(e) => setNewProjectName(e.target.value)} placeholder="Project Name" className="w-full p-3 border border-slate-200 rounded-xl mb-6 focus:ring-2 focus:ring-indigo-500 outline-none" autoFocus required />
              <div className="flex justify-end gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-slate-500 font-bold">Cancel</button>
                <button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700">Create</button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}