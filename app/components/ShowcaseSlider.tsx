'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'react-feather';

const ShowcaseSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 500; // Width of each card in pixels

  const slides = [
    {
      image: '/images/slider1.png',
      title: 'Development Issues',
      description: 'Comprehensive solutions for all your development challenges',
      rating: 5,
      date: 'May 15, 2023'
    },
    {
      image: '/images/slider2.png',
      title: 'Networking Issues',
      description: 'Advanced networking solutions for seamless connectivity',
      rating: 4,
      date: 'June 2, 2023'
    },
    {
      image: '/images/slider3.png',
      title: 'Drone Development',
      description: 'Cutting-edge drone technology for modern applications',
      rating: 5,
      date: 'July 10, 2023'
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full transition-all duration-500 ease-in-out py-20 overflow-hidden bg-[#d4d4d4]">
      {/* Heading */}
      <div className="w-full flex justify-center">
        <h2 className="text-5xl font-semibold text-gray-800 mb-8">
          Our <span className="text-blue-600">Solutions</span>
        </h2>
      </div>

      {/* Slider Carousel */}
      <div className="relative mx-auto gap-2 max-w-6xl">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-6 px-2"
          style={{
            transform: `translateX(-${currentIndex * cardWidth}px)`,
            width: `${slides.length * cardWidth}px`,
          }}
        >
          {slides.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 w-[360px] md:w-[500px] shrink-0"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex text-yellow-400">
                  {Array(item.rating)
                    .fill(2)
                    .map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                </div>
                <span className="text-gray-400 text-sm">{item.date}</span>
              </div>

              <div className="rounded-xl overflow-hidden mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="w-full h-[200px] object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-6">{item.description}</p>

              <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-all text-sm">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows and View All */}
      <div className="flex items-center justify-center mt-8 gap-6">
        <button
          className="p-2 rounded-full border border-gray-300 text-blue-500 hover:bg-blue-100 transition"
          onClick={handlePrev}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          className="p-2 rounded-full border border-gray-300 text-blue-500 hover:bg-blue-100 transition"
          onClick={handleNext}
        >
          <ChevronRight size={20} />
        </button>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-all text-sm">
          View All Solutions
        </button>
      </div>
    </section>
  );
};

export default ShowcaseSlider;