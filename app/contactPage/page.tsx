'use client';

import Image from "next/image";
import dynamic from "next/dynamic";
import ShowcaseSlider from '../components/ShowcaseSlider';
import { motion } from "framer-motion";
import { useState } from 'react';

// Dynamic imports to prevent SSR errors
const ContactAnimation = dynamic(() => import("../components/ContactAnimation"), {
  ssr: false,
});

const Globe = dynamic(() => import('../components/SvgGlobe'), {
  ssr: false,
});

export default function ContactHero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully!'
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#ffffff] flex flex-col justify-between font-sans text-black overflow-hidden">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6 py-10 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
          Let&apos;s Connect &amp; Build Together
        </h1>

        <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl">
          Whether it&apos;s a project inquiry, partnership opportunity, or a simple hello,
          we&apos;re always open to conversations that matter.
        </p>

        <button 
          type="button"
          className="mt-6 bg-black text-white px-8 py-3 rounded-full text-sm md:text-base font-medium hover:bg-gray-800 transition"
        >
          Learn More
        </button>

        <div className="mt-10 w-full max-w-xl">
          <ContactAnimation />
        </div>
      </section>

      <section>
        <ShowcaseSlider />
      </section>

      <section className="bg-[#f5f5f5] py-24 px-4 md:px-32 text-center font-sans">
        <div className="max-w-6xl mx-auto">
          <motion.blockquote
            className="text-4xl md:text-6xl font-semibold text-gray-800 leading-tight md:leading-[1.2]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            &quot;Technology is the catalyst for Africa&apos;s transformation—innovation, not dependence, will define our future.&quot;
          </motion.blockquote>

          <motion.div
            className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/images/profile1.jpg"
                alt="Okyere Nana Kofi"
                width={192}
                height={192}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-2xl md:text-3xl font-bold text-gray-800">Okyere Nana Kofi</p>
              <p className="text-lg text-gray-600 mt-2">Founder & CEO</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mt-20 mb-5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:bg-black/90 rounded-lg p-4 dark:border-[1px] dark:border-stone-900">
        <div className="p-4">
          <div>
            <h1 className="text-md text-gray-600 dark:text-gray-400 font-medium mb-4 text-center">
              CONTACT US
            </h1>
            <div>
              <h2 className="text-5xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
                Get in <span className="text-blue-600">Touch</span>
                <br /> With Us
              </h2>
            </div>
          </div>
    
          <div className="mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d53425.41331518519!2d-0.18678978588990106!3d5.586579138124397!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9afcb9fc8f1f%3A0xafc9a67398c4fb67!2sStanbic%20Heights!5e0!3m2!1sen!2sgh!4v1747075654459!5m2!1sen!2sgh"
              width="100%"
              height="450"
              className="rounded-lg border-0 w-full h-96"
              loading="lazy"
              title="Google Maps Location"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
    
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Form fields remain the same */}
            </form>
            
            <div className="flex flex-col justify-between items-start">
              {/* Contact info remains the same */}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#0a2540] text-white min-h-screen px-6 py-16 overflow-hidden">
        <div className="absolute right-0 top-0 w-full md:w-1/2 h-full z-0 opacity-70">
          <div className="w-full h-full">
            <Globe />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-[#00d4ff] font-semibold tracking-wide text-sm mb-3">Global scale</p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                The backbone for <br /> global commerce
              </h1>
              <p className="text-lg leading-relaxed text-gray-300">
                Stripe makes moving money as easy and programmable as moving data. Our teams are
                based in offices around the world and we process hundreds of billions of dollars each
                year for ambitious businesses of all sizes.
              </p>
            </div>
          </div>

           <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left py-6">
              <div className="p-6">
                <p className="text-2xl font-semibold text-white">500M+</p>
                <p className="text-sm text-gray-400">API requests/day</p>
              </div>
              <div className="p-6">
                <p className="text-2xl font-semibold text-white">99.999%</p>
                <p className="text-sm text-gray-400">historical uptime</p>
              </div>
              <div className="p-6">
                <p className="text-2xl font-semibold text-white">90%</p>
                <p className="text-sm text-gray-400">U.S. adult customers</p>
              </div>
              <div className="p-6">
                <p className="text-2xl font-semibold text-white">135+</p>
                <p className="text-sm text-gray-400">currencies and methods</p>
              </div>
            </div>
            </div>
        </div>
      </section>

      
    </main>
  );
}