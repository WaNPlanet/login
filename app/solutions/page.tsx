'use client';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const solutions = [
  {
    id: 1,
    title: 'Enterprise',
    icon: '/icons/ent.png',
    description:
      'We help enterprises optimize operations with modern ERP systems. From finance and inventory to HR and analytics, our tailored platforms like HealthConnect ERP ensure scalable, secure, and smart workflows.',
    features: [
      'Custom ERP platform development (e.g., HealthConnect)',
      'Integration with legacy systems',
      'Advanced reporting & analytics',
      'Role-based access control and data security',
      'Cloud-based, scalable infrastructure'
    ],
  },
  {
    id: 2,
    title: 'Small Business',
    icon: '/icons/smb.png',
    description:
      'We support small businesses with affordable, efficient digital tools to grow faster. From websites to CRMs, we enable agility, professionalism, and visibility.',
    features: [
      'Custom websites and eCommerce stores',
      'CRM & client management systems',
      'Point of Sale (POS) software',
      'Inventory & staff scheduling tools',
      'Marketing automation solutions'
    ],
  },
  {
    id: 3,
    title: 'Startups',
    icon: '/icons/sup.png',
    description:
      'Startups need speed, flexibility, and scalable MVPs. We build prototypes, validate ideas, and support product-market fit through agile development.',
    features: [
      'Rapid MVP development',
      'Pitch deck & product UI mockups',
      'Cloud-native architecture & APIs',
      'Product-market fit consulting',
      'Technical co-founder support'
    ],
  }
];

export default function SolutionsPage() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans px-4 py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tailored <span className="text-blue-600">Solutions</span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Discover how we empower different types of clients through tech
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {solutions.map((item) => (
          <motion.div
            key={item.id}
            onClick={() => setActiveId(activeId === item.id ? null : item.id)}
            className={`cursor-pointer bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 ${activeId === item.id ? 'ring-2 ring-blue-500' : ''}`}
            whileHover={{ y: -8, scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={`${item.title} icon`}
                    width={36}
                    height={36}
                  />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <AnimatePresence>
                {activeId === item.id && (
                  <motion.ul
                    className="list-disc pl-5 text-gray-700 text-sm space-y-1"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {item.features.map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-20 text-center max-w-2xl mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <p className="text-lg text-gray-700 mb-6">
          Need a custom solution tailored for your team?
        </p>
        <motion.button
          className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let&apos;s Talk
        </motion.button>
      </motion.div>
    </div>
  );
}
