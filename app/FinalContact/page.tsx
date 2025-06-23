"use client";

import { useState } from 'react';
import { MapPinIcon, EnvelopeIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/solid';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import the Globe component with SSR disabled
const Globe = dynamic(() => import('../components/SvgGlobe'), { 
  ssr: false,
  loading: () => <div className="h-[500px] flex items-center justify-center">Loading globe...</div>
});

// Google Map component
function GoogleMapEmbed() {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.755204044603!2d-0.2165151!3d5.5845805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzUnMDQuNSJOIDDCsDEyJzUwLjIiVw!5e0!3m2!1sen!2sgh!4v1620000000000!5m2!1sen!2sgh"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Starinx Office Location"
        aria-label="Google Maps showing Starinx office location"
      />
    </div>
  );
}

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message!');
  };

  return (
    <>
      <section className="bg-white min-h-screen font-sans">
        {/* Banner Section */}
        <div className="relative w-full h-[300px] md:h-[400px] bg-blue-900 text-white flex items-center justify-center">
          <Image
            src="/contact.png" 
            alt="Contact Banner"
            fill
            className="absolute inset-0 z-0 opacity-70 object-cover"
          />
          <div className="relative z-10 text-center">
            <h1 className="text-5xl font-extrabold mb-2">Contact Us</h1>
            <p className="text-lg text-gray-200">We&apos;re here to help. Reach out any time.</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl text-center text-gray-600 font-medium mb-2">
            We love to hear from you
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h5 className='font-bold text-lg text-blue-800'>Take the first step, we will handle the rest</h5>
                <br />
                <label className="block text-sm font-semibold text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>

            {/* Google Map */}
            <GoogleMapEmbed />
          </div>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
            <div className="p-6  text-center bg-white ">
              <MapPinIcon className="mx-auto h-8 w-8 text-blue-500" />
              <h3 className="font-bold text-lg text-blue-800 mt-2">Location</h3>
              <p className="mt-2 text-gray-600">NT469 Obutu Street, Accra Newtown, Ghana</p>
            </div>

            <div className="p-6  text-center bg-white ">
              <EnvelopeIcon className="mx-auto h-8 w-8 text-blue-500" />
              <h3 className="font-bold text-lg text-blue-800 mt-2">Email / Contact</h3>
              <p className="mt-2 text-gray-600">info.user@starinx.com</p>
              <p className="mt-2 text-gray-600">+233 551 091 265</p>
            </div>

            <div className="p-6  text-center bg-white ">
              <ClockIcon className="mx-auto h-8 w-8 text-blue-500" />
              <h3 className="font-bold text-lg text-blue-800 mt-2">Working Hours</h3>
              <p className="mt-2 text-gray-600">Mon - Fri: 9am - 5pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Globe */}
      <section className="relative bg-[#0a2540] text-white">
        {/* Globe Background */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Globe />
        </div>
      

        {/* Footer Content */}
        <div className="relative z-10 px-6 py-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-14">
            {/* About */}
            <div>
              <h3 className="text-4xl font-bold mb-6">
                <span className="text-blue-400 tracking-wider drop-shadow-md">Starinx</span>
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Building future-focused solutions for teams across the world.
                We believe in speed, simplicity, and security.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-3xl font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-300 text-base">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Services</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-3xl font-semibold mb-6">Get in Touch</h4>
              <ul className="space-y-4 text-base text-gray-300">
                <li className="flex items-start gap-2">
                  <MapPinIcon className="h-6 w-6 text-blue-400" />
                  NT469 Obutu Street, Accra Newtown, Ghana
                </li>
                <li className="flex items-start gap-2">
                  <EnvelopeIcon className="h-6 w-6 text-blue-400" />
                  info.user@starinx.com
                </li>
                <li className="flex items-start gap-2">
                  <PhoneIcon className="h-6 w-6 text-blue-400" />
                  +233 551 091 265
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-3xl font-semibold mb-6">Newsletter</h4>
              <p className="text-gray-400 text-base mb-4">
                Subscribe to get the latest news and product updates.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md px-4 py-2 text-white text-sm border bg-[#112d4e] placeholder-gray-300"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-20 border-t border-gray-700 pt-10 flex flex-col md:flex-row justify-between items-center text-base text-gray-300">
            <p className="text-lg font-medium">
              &copy; {new Date().getFullYear()} Starinx. All rights reserved.
            </p>
            <div className="flex gap-6 mt-6 md:mt-0">
              <a href="#"><FaFacebookF className="hover:text-white h-7 w-7 transition-transform duration-300 hover:scale-110" /></a>
              <a href="#"><FaTwitter className="hover:text-white h-7 w-7 transition-transform duration-300 hover:scale-110" /></a>
              <a href="#"><FaLinkedinIn className="hover:text-white h-7 w-7 transition-transform duration-300 hover:scale-110" /></a>
              <a href="#"><FaInstagram className="hover:text-white h-7 w-7 transition-transform duration-300 hover:scale-110" /></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
