'use client';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    image: '/header.png',
  },
  {
    id: 2,
    image: 'https://www.tickertape.in/blog/wp-content/uploads/2023/04/25-Apr-2023-Top-general-insurance-companies-in-India-13.png',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="w-full relative overflow-hidden">
      <div className="relative w-full h-[65vh] md:h-[70vh] lg:h-[50vh]">
        <Image
          src={slides[current].image}
          alt={`Slide ${current + 1}`}
          fill
          className="lg:object-contain object-cover"
          priority
        />
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
      >
        <FaChevronLeft className="text-black" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
      >
        <FaChevronRight className="text-black" />
      </button>
    </section>
  );
}
