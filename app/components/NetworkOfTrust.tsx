// app/components/network/section.tsx
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function NetworkOfTrust() {
  return (
    <section className="relative py-20 bg-[#0d0d1c] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center z-10 relative">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Building a Network of Trust
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 max-w-3xl mx-auto"
        >
          Energy & oil companies worldwide share anonymized attack data in real time with the CrowdSec network,
          providing instant and sector-specific threat intelligence.
        </motion.p>
      </div>

      {/* Background Map */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute inset-0 z-0 opacity-40"
      >
        <Image
          src="/map.png" // use your custom world map SVG or PNG
          alt="Map"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Example Dots or Glow Circles */}
      <div className="absolute top-[30%] left-[40%] w-4 h-4 bg-yellow-400 rounded-full animate-ping z-10" />
      <div className="absolute top-[40%] left-[70%] w-4 h-4 bg-yellow-400 rounded-full animate-ping z-10" />
      <div className="absolute top-[50%] left-[20%] w-4 h-4 bg-yellow-400 rounded-full animate-ping z-10" />
    </section>
  );
}
