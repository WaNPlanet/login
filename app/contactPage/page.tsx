'use client';

import Image from "next/image";
import dynamic from "next/dynamic";
import ShowcaseSlider from '../components/ShowcaseSlider';
import { motion } from "framer-motion";
import { useState } from 'react';

// Dynamic import to prevent SSR error
const ContactAnimation = dynamic(() => import("../components/ContactAnimation"), {
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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would call your API here:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      
      // For demo purposes, we'll just log the data
      console.log('Form submitted:', formData);
      
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully!'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
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

        <button className="mt-6 bg-black text-white px-8 py-3 rounded-full text-sm md:text-base font-medium hover:bg-gray-800 transition">
          Learn More
        </button>

        <div className="mt-10 w-full max-w-xl">
          <ContactAnimation />
        </div>
      </section>

      <section>
        <main>
          <ShowcaseSlider />
        </main>
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
          {/* Heading */}
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
    
          {/* Google Map */}
          <div className="mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d53425.41331518519!2d-0.18678978588990106!3d5.586579138124397!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9afcb9fc8f1f%3A0xafc9a67398c4fb67!2sStanbic%20Heights!5e0!3m2!1sen!2sgh!4v1747075654459!5m2!1sen!2sgh"
              width="100%"
              height="450"
              className="rounded-lg border-0 w-full h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
    
          {/* Contact Form and Info */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-stone-700 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-stone-800 dark:text-white"
                  placeholder="Your Name"
                />
              </div>
    
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-stone-700 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-stone-800 dark:text-white"
                  placeholder="your@email.com"
                />
              </div>
    
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-stone-700 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-stone-800 dark:text-white"
                  placeholder="+1234567890"
                />
              </div>
    
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-stone-700 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-stone-800 dark:text-white"
                  placeholder="Subject of your message"
                />
              </div>
    
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-stone-700 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-stone-800 dark:text-white"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              {submitStatus && (
                <div className={`p-3 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}
    
              <button
                type="submit"
                disabled={isSubmitting}
                className={`mt-4 px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
    
            {/* Contact Info */}
            <div className="flex flex-col justify-between items-start">
              <div className="space-y-6 text-gray-700 dark:text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p>+1 (123) 456-7890</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p>support@example.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Twitter</h3>
                  <p>
                    <a
                      href="https://twitter.com/example"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      @example
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Office Address</h3>
                  <p>123 Main Street, San Francisco, CA 94105</p>
                </div>
              </div>
              <div>
                <Image
                  src="/images/contact1.png"
                  alt="Contact Image"
                  width={500}
                  height={500}
                  className="rounded-lg mt-4"
                  unoptimized
                  quality={100}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}