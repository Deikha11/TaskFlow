import React, { useState } from 'react';

// Qaybta sawirada la soo dhex radday (Imported Images)
import boardImg from '../assets/feature-boards.png';
import analyticsImg from '../assets/feature-analytics (2).png';
import chatImg from '../assets/feature-chat.png';

export default function Features() {
  const [activeTab, setActiveTab] = useState('boards');

  const featuresData = {
    boards: {
      title: "Agile Task Boards",
      desc: "Organize your workflow into customizable columns. Drag and drop features, assign owners, set custom estimates, and move cards safely across custom pipelines.",
      image: boardImg,
      alt: "Agile Task Boards Interface"
    },
    analytics: {
      title: "Advanced Data Reports",
      desc: "Track velocity charts, burn-down pipelines, and team capacity real-time. Make optimized decisions based on predictive automated reports generated weekly.",
      image: analyticsImg,
      alt: "Advanced Data Reports Interface"
    },
    chat: {
      title: "Contextual Team Chat",
      desc: "Stop bouncing back and forth to Slack. Comment directly inside open issues, mention teammates natively, and share design documentation securely inside code spaces.",
      image: chatImg,
      alt: "Contextual Team Chat Interface"
    }
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-slate-950 sm:text-4xl">Everything you need to ship products faster</h2>
          <p className="mt-4 text-lg text-slate-600">Click through our primary software workflows below to see how TaskFlow converts complexity into speed.</p>
        </div>

        {/* Interactive Tabs Navigation */}
        <div className="flex justify-center border-b border-slate-100 mb-12 max-w-md mx-auto">
          <button 
            onClick={() => setActiveTab('boards')} 
            className={`flex-1 pb-4 text-sm font-semibold border-b-2 transition ${activeTab === 'boards' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
          >
            Task Boards
          </button>
          <button 
            onClick={() => setActiveTab('analytics')} 
            className={`flex-1 pb-4 text-sm font-semibold border-b-2 transition ${activeTab === 'analytics' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
          >
            Analytics
          </button>
          <button 
            onClick={() => setActiveTab('chat')} 
            className={`flex-1 pb-4 text-sm font-semibold border-b-2 transition ${activeTab === 'chat' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
          >
            Team Sync
          </button>
        </div>

        {/* Dynamic Display Area based on selected Tab state */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-slate-50/50 p-8 rounded-3xl border border-slate-100">
          <div>
            <h3 className="text-2xl font-bold text-slate-950 mb-4">{featuresData[activeTab].title}</h3>
            <p className="text-slate-600 leading-relaxed mb-6">{featuresData[activeTab].desc}</p>
            <ul className="space-y-3 text-sm font-medium text-slate-700">
              <li className="flex items-center"><svg className="w-4 h-4 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Fully dynamic interface</li>
              <li className="flex items-center"><svg className="w-4 h-4 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Bank-level file encryption security</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-2xl border border-slate-200/60 p-2 shadow-xl flex flex-col justify-center items-center text-center h-80 relative overflow-hidden">
            
            <img 
              src={featuresData[activeTab].image} 
              alt={featuresData[activeTab].alt} 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}