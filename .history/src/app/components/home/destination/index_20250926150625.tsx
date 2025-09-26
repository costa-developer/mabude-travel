"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { topDestination } from "./data";

interface Destination {
  image: string;
  place: string;
  hotels: string;
}

const scrollSlider = (direction: 'left' | 'right') => {
  const slider = document.getElementById('destination-slider');
  if (!slider) return;

  const scrollAmount = slider.offsetWidth * 0.75; 
  slider.scrollBy({
    left: direction === 'right' ? scrollAmount : -scrollAmount,
    behavior: 'smooth',
  });
};

export default function TopDestinationOne(): JSX.Element {
  return (
    <section className="container mx-auto px-4 py-20">
      {/* Header */}
      <div className="text-center pb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Explore Zimbabwe & India
        </h2>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          Ready for an unforgettable adventure? Discover top destinations in Zimbabwe
          and India with curated tours and travel experiences.
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative mt-10">
        {/* Navigation Arrows (visible on large screens) */}
        <button
          onClick={() => scrollSlider('left')}
          className="hidden lg:flex items-center justify-center absolute top-1/2 -left-6 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-100 z-10 hover:bg-red-600 hover:text-white transition-all duration-300"
          aria-label="Scroll Left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scrollSlider('right')}
          className="hidden lg:flex items-center justify-center absolute top-1/2 -right-6 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-100 z-10 hover:bg-red-600 hover:text-white transition-all duration-300"
          aria-label="Scroll Right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slider */}
        <div
          id="destination-slider"
          className="flex space-x-6 overflow-x-auto scrollbar-hide py-2"
        >
          {topDestination.map((item: Destination, index: number) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 md:w-80 lg:w-96 min-w-[280px] group relative rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={`A stunning view of ${item.place}`}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out rounded-xl"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-500 rounded-xl"></div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-start">
                <Link
                  href="#"
                  className="text-2xl font-semibold text-white mb-1 hover:text-red-500 transition-colors duration-300"
                >
                  {item.place}
                </Link>
                <p className="text-white/80 text-base font-medium">
                  {item.hotels}
                </p>
                <Link
                  href="#"
                  className="mt-3 text-sm font-semibold text-white border-b-2 border-transparent hover:border-red-500 transition-all duration-300"
                >
                  View Details &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
