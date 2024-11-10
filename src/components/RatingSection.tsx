import React from 'react';
import { Star, Award, TrendingUp, Shield, ArrowRight } from 'lucide-react';

export default function RatingsSection() {
  const ratings = [
    {
      icon: <Star className="w-12 h-12 text-purple-400" />,
      title: "0%",
      description: "Data loss",
      highlight: "User Favorite"
    },
    {
      icon: <Award className="w-12 h-12 text-pink-400" />,
      title: "Best of UI/UX",
      description: "Feedback platform",
      highlight: "By teachers"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-400" />,
      title: "Exiting offers",
      description: "Rewarding",
      highlight: "Positive towards growth"
    },
    {
      icon: <Shield className="w-12 h-12 text-pink-400" />,
      title: "256-bit",
      description: "Bank-grade Security",
      highlight: "ISO Certified"
    }
  ];

  return (
    <section id="ratings" className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
              Trusted by Millions
            </span>
          </div>
          <h2 className="mt-2 text-4xl md:text-6xl font-bold text-white">
            The most trusted
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}feedback platform
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-400">Power Up Productivity with Perks that Matter</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ratings.map((rating, index) => (
            <div key={index} className="carnival-card group">
              <div className="mb-6">{rating.icon}</div>
              <h3 className="text-3xl font-bold text-white mb-2">{rating.title}</h3>
              <p className="text-gray-400 mb-4">{rating.description}</p>
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-sm text-purple-400">
                {rating.highlight}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:opacity-90 transition-all flex items-center mx-auto">
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-8 text-center">
          {[
            { number: "100 Mbps", label: "Data transfer Speeds" },
            { number: "50+", label: "rewiews till now" },
            { number: "99.9%", label: "Uptime" }
          ].map((stat, index) => (
            <div key={index} className="carnival-card">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <p className="mt-2 text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
