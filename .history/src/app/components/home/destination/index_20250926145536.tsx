// components/TopDestinationOne.tsx
"use client";

import Link from "next/link";
import { topDestination } from "./data";

interface Destination {
  image: string;
  place: string;
  hotels: string;
}

export default function TopDestinationOne(): JSX.Element {
  return (
    <div className="container relative px-4 mx-auto mb-10">
      {/* Header */}
      <div className="grid grid-cols-1 pb-8 text-center">
        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
          Top Destinations
        </h3>
        <p className="text-slate-400 max-w-xl mx-auto">
          Planning for a trip? We will organize your trip with the best places
          and within best budget!
        </p>
      </div>

      {/* Slider */}
      <div className="relative mt-6">
        <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          {topDestination.map((item: Destination, index: number) => (
            <div
              key={index}
              className="snap-start flex-shrink-0 w-72 md:w-80 lg:w-96 group relative overflow-hidden rounded-md shadow-lg dark:shadow-gray-800"
            >
              <img
                src={item.image}
                alt={item.place}
                className="w-full h-72 object-cover scale-125 group-hover:scale-100 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <Link
                  href="#"
                  className="text-lg font-medium text-white hover:text-red-500 transition-colors duration-500"
                >
                  {item.place}
                </Link>
                <p className="text-white/70 group-hover:text-white text-sm transition-colors duration-500">
                  {item.hotels}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
