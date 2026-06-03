import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Qaybahaagii Hore (Navbar & Footer)
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Bogaggaagii Hore
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import { About, Privacy, Terms } from './pages/StaticPages';

// Qaybaha Cusub ee SaaS Dashboard
import MainLayout from './components/layout/MainLayout';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Finance from './pages/Finance';
import Tasks from './pages/Tasks'; // <--- Kanban Board-ka cusub

function App() {
  const location = useLocation();
  
  // Qari Navbar iyo Footer haddii qofku Dashboard ama Checkout joogo
  const hideNavAndFooter = location.pathname.includes('/dashboard') || location.pathname.includes('/checkout');

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-indigo-500 selection:text-white">
      {!hideNavAndFooter && <Navbar />}
      
      <main className={!hideNavAndFooter ? "pt-16" : "h-screen overflow-hidden"}>
        <Routes>
          {/* 1. Bogagga Caadiga ah (Bannaanka) */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />

          {/* 2. Nidaamka Dashboard-ka (Gudaha) */}
          <Route path="/dashboard" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="finance" element={<Finance />} />
            <Route path="tasks" element={<Tasks />} />
          </Route>
        </Routes>
      </main>

      {!hideNavAndFooter && <Footer />}
    </div>
  );
}

export default App;