// app/components/glimpse/section.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function GlimpseSection() {
  return (
    <section className="bg-yellow-400 text-black py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Get a glimpse of what efficient operations look like?
          </h3>
          <p className="text-lg text-gray-800">
            Learn how to maximize security while minimizing operational costs with our Cost-Effective Security Toolkit.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/efficient-card.png"
            alt="Efficiency Card"
            width={300}
            height={200}
            className="rotate-6 rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
