import React from 'react';
import { ArrowRight, Smartphone, CreditCard, Wallet, BadgeCheck } from 'lucide-react';
import Header from './components/Header';
import RatingsSection from './components/RatingSection';
import SurveyForm from './components/DemoSection';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
                  #1 feedback Platform
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Smart feedback for the
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {" "}Digital Age
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-400">
                Experience hassle-free feedback,user interaction and user data management with perks on every transaction.
              </p>
              <div className="mt-8 flex items-center space-x-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:opacity-90 transition-all flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80"
                alt="Credit Card"
                className="relative rounded-3xl shadow-2xl border border-gray-800"
              />
            </div>
          </div>
        </div>
      </section>

      <RatingsSection />
      <SurveyForm />
      <Dashboard />   

      {/* Features */}
      <section className="py-24" id="features">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">Why choose perkify</h2>
            <p className="mt-4 text-xl text-gray-400">Experience the next generation of feedback</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: <Smartphone className="w-8 h-8 text-purple-400" />,
                title: "Quick Setup",
                description: "Get started in minutes with our simplw dashboard and QR codes"
              },
              {
                icon: <CreditCard className="w-8 h-8 text-pink-400" />,
                title: "Easy access",
                description: "Access your user data and feedback instantly on your dashboard"
              },
              {
                icon: <Wallet className="w-8 h-8 text-purple-400" />,
                title: "Feasible",
                description: "No hidden charges and reasonable rates"
              },
              {
                icon: <BadgeCheck className="w-8 h-8 text-pink-400" />,
                title: "Secure",
                description: "We use advanced encryption to ensure your data is always safe"
              }
            ].map((feature, index) => (
              <div key={index} className="carnival-card">
                {feature.icon}
                <h3 className="text-xl font-semibold mt-4 text-white">{feature.title}</h3>
                <p className="mt-2 text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                perkify
              </span>
              <p className="mt-4 text-gray-400">Making feedback easy</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Rewards</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 perkify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;