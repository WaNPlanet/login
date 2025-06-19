'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-800">
            Starinx
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/categories">Categories</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Links */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4">
            <ul className="space-y-3 text-sm text-gray-700">
              <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
              <li><Link href="/categories" onClick={() => setIsOpen(false)}>Categories</Link></li>
              <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-24 min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center px-4 py-10 overflow-y-auto">
        {/* Page Title */}
        <header className="w-full max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>

          {/* Text Block */}
          <div className="space-y-3 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            <p>We’re here to help you make things happen.</p>
            <p>You can reach out to us anytime—day or night. Feel free to reach out to us.</p>
            <p>Let’s create something meaningful together. Let’s get talking.</p>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <button className="px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition">
              Make the move
            </button>
          </div>
        </header>

        {/* Image Section */}
        <section className="w-full max-w-4xl px-4">
          <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/contact.jpeg"
              alt="Contact illustration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>
      </main>
    </>
  );
}
