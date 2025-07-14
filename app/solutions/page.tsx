// app/solutions/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans overflow-x-hidden">
      {/* Intro Section */}
      <section className="relative pt-32 pb-60 px-6 md:px-20 bg-gradient-to-b from-black to-purple-900 text-white overflow-hidden">
        {/* Animated Background Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-purple-700 opacity-10 blur-xl animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-indigo-800 opacity-10 blur-xl animate-float delay-1000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-20 h-20 rounded-full bg-pink-800 opacity-10 blur-xl animate-float delay-2000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold gradient-text mb-4">
            Smart Solutions for Modern Businesses
          </h1>
        </div>

        {/* Ribbons */}
        <div className="absolute top-36 left-0 w-[200%] text-center text-xl text-white py-6 -rotate-2 shadow-lg pointer-events-none overflow-hidden wave-ribbon">
          ✨ END-TO-END SOLUTIONS ✨ DATA-FIRST STRATEGY ✨ AGILE SCALING ✨ AI POWER ✨ PROCESS DESIGN ✨
          ✨ END-TO-END SOLUTIONS ✨ DATA-FIRST STRATEGY ✨ AGILE SCALING ✨ AI POWER ✨ PROCESS DESIGN ✨
        </div>
        <div
          className="absolute top-72 left-0 w-[200%] text-center text-xl text-white py-6 rotate-2 shadow-lg pointer-events-none overflow-hidden wave-ribbon"
          style={{ animationDirection: "reverse", animationDuration: "22s" }}
        >
          🚀 VISION TO EXECUTION 🚀 SYSTEMS INTEGRATION 🚀 CUSTOM DEVELOPMENT 🚀 TEAM ENABLEMENT 🚀
          🚀 VISION TO EXECUTION 🚀 SYSTEMS INTEGRATION 🚀 CUSTOM DEVELOPMENT 🚀 TEAM ENABLEMENT 🚀
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 px-6 md:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          Our <span className="gradient-text">Solutions</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              icon: "🤖",
              title: "Automation",
              desc: "Streamline tasks and boost efficiency using AI-driven workflows.",
            },
            {
              icon: "📈",
              title: "Data Insights",
              desc: "Turn raw data into meaningful decisions and business direction.",
            },
            {
              icon: "🧠",
              title: "AI Integration",
              desc: "Implement machine learning to drive intelligent operations.",
            },
            {
              icon: "💡",
              title: "Innovation Lab",
              desc: "Rapid prototyping and product design for the digital era.",
            },
            {
              icon: "🌐",
              title: "Digital Transformation",
              desc: "Overhaul legacy systems and embrace modern tech stacks.",
            },
            {
              icon: "📈",
              title: "Performance Boost",
              desc: "Metrics-driven optimization for better growth and ROI.",
            },
          ].map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white border border-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">{sol.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{sol.title}</h3>
              <p className="text-gray-600 text-sm">{sol.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-br from-purple-700 to-indigo-800 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Ready to Elevate Your Business?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 max-w-2xl mx-auto"
        >
          Let&apos;s build smarter systems and better strategies — together.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-purple-800 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100"
        >
          Contact Us
        </motion.button>
      </section>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(90deg, #0ea5e9, #f8fafc);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .wave-ribbon {
          animation: waveMove 20s linear infinite, ribbonFade 12s linear infinite;
          background: linear-gradient(90deg, #000000, #0ea5e9, #ffffff, #0ea5e9, #000000);
          background-size: 200% 100%;
          white-space: nowrap;
          font-weight: bold;
          letter-spacing: 1px;
        }
        @keyframes waveMove {
          0% {
            transform: translateX(0) rotate(-2deg);
          }
          100% {
            transform: translateX(-50%) rotate(-2deg);
          }
        }
        @keyframes ribbonFade {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
