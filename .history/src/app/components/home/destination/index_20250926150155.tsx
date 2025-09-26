// components/TopDestinationOne.tsx
"use client";

import Link from "next/link";
import { topDestination } from "./data"; // Assuming your data is still here
import { ChevronLeft, ChevronRight } from "lucide-react"; // Install lucide-react for icons

interface Destination {
  image: string;
  place: string;
  hotels: string;
}

// Function to handle scrolling the slider
const scroll = (direction: 'left' | 'right') => {
  const slider = document.getElementById('destination-slider');
  if (slider) {
    const scrollAmount = slider.offsetWidth * 0.75; // Scroll 75% of the container width
    slider.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  }
};

export default function TopDestinationOne(): JSX.Element {
  return (
    <div className="container relative px-4 mx-auto py-20">
      {/* Header */}
      <div className="grid grid-cols-1 pb-8 text-center">
        <h3 className="mb-4 md:text-4xl text-3xl font-bold text-gray-800 dark:text-white">
          Explore Our Top Destinations
        </h3>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-lg">
          Ready to explore? Discover world-class destinations and plan your
          perfect trip with our curated guides.
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative mt-10">
        {/* Navigation Arrows (visible on larger screens) */}
        <button
          onClick={() => scroll('left')}
          className="hidden lg:block absolute top-1/2 -left-6 transform -translate-y-1/2 p-3 rounded-full bg-white shadow-lg border border-gray-100 z-10 hover:bg-red-600 hover:text-white transition-all duration-300"
          aria-label="Previous Destination"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 p-3 rounded-full bg-white shadow-lg border border-gray-100 z-10 hover:bg-red-600 hover:text-white transition-all duration-300"
          aria-label="Next Destination"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Destination Cards Slider */}
        <div
          id="destination-slider"
          className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-2" // Added py-2 for shadow visibility
        >
          {topDestination.map((item: Destination, index: number) => (
            <div
              key={index}
              // Set a consistent minimum width for better responsiveness and card size
              className="snap-start flex-shrink-0 w-80 md:w-96 min-w-[320px] group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={`A stunning view of ${item.place}`} // Improved accessibility with better alt text
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" // Smoother, slower transition
              />
              
              {/* Overlay (Improved gradient for better text visibility) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500"></div>

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
                {/* Clearer CTA on hover (optional) */}
                <Link 
                  href="#" 
                  className="mt-3 text-sm font-semibold text-white border-b-2 border-transparent group-hover:border-red-500 transition-colors duration-300"
                >
                  View Details &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}