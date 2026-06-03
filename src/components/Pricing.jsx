import React from 'react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$0",
      period: "/month",
      description: "Perfect for individuals just getting started.",
      features: ["1 User Account", "10 Projects", "Basic Support", "Community Access"],
      buttonText: "Start for Free",
      popular: false
    },
    {
      name: "Pro Plan",
      price: "$19",
      period: "/month",
      description: "Ideal for small businesses and professionals.",
      features: ["5 User Accounts", "Unlimited Projects", "24/7 Priority Support", "EVC Plus Integration", "Analytics Dashboard"],
      buttonText: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large teams requiring maximum power.",
      features: ["Unlimited Users", "Custom Domain", "Dedicated Manager", "Premium Support", "Custom API"],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Plans tailored to your needs
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Choose the best plan for your business. Fast, secure payments powered by EVC Plus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div key={idx} className={`relative p-8 bg-white border rounded-3xl shadow-sm flex flex-col ${plan.popular ? 'border-indigo-500 shadow-indigo-100 ring-1 ring-indigo-500' : 'border-slate-200'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                <p className="mt-2 text-sm text-slate-500">{plan.description}</p>
                <div className="mt-4 flex items-baseline text-5xl font-extrabold text-slate-900">
                  {plan.price}
                  <span className="ml-1 text-xl font-medium text-slate-500">{plan.period}</span>
                </div>
              </div>
              
              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-500 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Dynamic Link Passing State to Checkout */}
              <Link 
                to="/checkout"
                state={{ plan: plan }}
                className={`block w-full py-3 rounded-xl font-bold text-sm text-center transition ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-600/10' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}