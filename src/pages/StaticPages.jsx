import React from 'react';
import { Link } from 'react-router-dom';

export const About = () => (
  <div className="min-h-screen bg-white">
    <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">About Our Company</h1>
        <p className="mt-4 text-xl text-slate-500 max-w-3xl mx-auto">
          We are dedicated to building software that empowers businesses to grow, scale, and succeed in the digital era.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            Founded in 2024, our goal has always been to simplify complex processes. We believe that technology should be accessible, secure, and intuitive for everyone, regardless of their technical background.
          </p>
          <p className="text-slate-600 leading-relaxed">
            By integrating local payment solutions like EVC Plus with cutting-edge web technologies, we bridge the gap between innovation and practical, everyday business operations.
          </p>
        </div>
        <div>
          {/* Sawirka kooxda: Hubi inuu ku jiro public/images/about-team.jpg */}
          <img 
            src="/images/about-team.jpg" 
            alt="Our Team" 
            className="rounded-2xl shadow-xl w-full h-auto object-cover bg-slate-100 min-h-[300px]" 
          />
        </div>
      </div>
    </div>
  </div>
);

export const Privacy = () => (
  <div className="min-h-screen bg-slate-50 py-20 px-4">
    <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-sm border border-slate-200">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
      <div className="space-y-6 text-slate-600">
        <p>Last updated: June 2026</p>
        
        <h2 className="text-2xl font-semibold text-slate-800 mt-8">1. Information We Collect</h2>
        <p>We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This includes names, emails, and payment numbers.</p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8">2. How We Use Information</h2>
        <p>We may use the information we collect about you to provide, maintain, and improve our services, including processing payments securely via our integrated APIs.</p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8">3. Data Security</h2>
        <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access. Payment details (like PINs) are never stored on our servers.</p>

        <div className="mt-10 pt-6 border-t border-slate-200">
          <Link to="/" className="text-indigo-600 hover:underline font-medium">&larr; Back to Home</Link>
        </div>
      </div>
    </div>
  </div>
);

export const Terms = () => (
  <div className="min-h-screen bg-slate-50 py-20 px-4">
    <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-sm border border-slate-200">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
      <div className="space-y-6 text-slate-600">
        <p>Please read these terms carefully before using our platform.</p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8">1. Acceptance of Terms</h2>
        <p>By accessing and using our service, you accept and agree to be bound by the terms and provision of this agreement.</p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8">2. User Accounts</h2>
        <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party.</p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8">3. Termination</h2>
        <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

        <div className="mt-10 pt-6 border-t border-slate-200">
          <Link to="/" className="text-indigo-600 hover:underline font-medium">&larr; Back to Home</Link>
        </div>
      </div>
    </div>
  </div>
);