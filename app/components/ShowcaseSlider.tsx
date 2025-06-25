
// components/ShowcaseSlider.tsx

'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const slides = [
  {
    image: '/images/slider1.png',
    title: 'Slide Title 1',
    description: 'Development Issues'
  },
  {
    image: '/images/slider2.png',
    title: 'Slide Title 2',
    description: 'Networking Issues'
  },
  {
    image: '/images/slider3.png',
    title: 'Slide Title 3',
    description: 'Drone Development.'
  }
];

const ShowcaseSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false
  };

  return (
    <section className="bg-[#d4d4d4] font-sans py-16 px-2 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">Our Solutions</h2>
          <p className="mt-2 text-gray-600 text-base md:text-lg max-w-2xl">
            We provide powerful digital tools to help you grow and scale your business globally.
          </p>
        </div>

        <Slider {...settings}>
          {slides.map((slide, idx) => (
            <div key={idx} className="px-2">
              <div className="rounded-xl overflow-hidden shadow-md">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={1200}
                  height={600}
                  className="w-full h-[270px] object-cover"
                />
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-bold text-gray-800">{slide.title}</h3>
                  <p className="text-sm text-gray-600">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ShowcaseSlider;
