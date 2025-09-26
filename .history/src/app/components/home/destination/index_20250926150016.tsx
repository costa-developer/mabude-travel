// components/TopDestinationOne.tsx
"use client";

import Link from "next/link";
import Image from "next/image"; // 1. Use Next.js Image component
import { topDestination } from "./data"; // Assuming 'topDestination' is an array of Destination

/**
 * Interface for a single destination item.
 * NOTE: Changed 'hotels' type to number and name to 'hotelCount' for better data representation.
 */
interface Destination {
  image: string; // URL path to the image
  place: string; // Name of the destination (e.g., "Paris")
  hotelCount: number; // Number of hotels/properties available
}

// 2. Use a type for the component props if it were to accept them, but using JSX.Element for the return type is fine
export default function TopDestinationOne(): JSX.Element {
  // Type assertion for clarity and safety, assuming topDestination is defined in ./data
  const destinations: Destination[] = topDestination as Destination[]; 

  return (
    <section className="container relative mx-auto py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="text-center mb-10 md:mb-12">
        <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Explore Our Top Destinations
        </h2>
        <p className="text-gray-600 dark:text-slate-400 max-w-xl mx-auto text-lg">
          Ready for an adventure? Let us organize your perfect trip with hand-picked locations and budget-friendly options.
        </p>
      </header>

      {/* Destination Slider (Horizontal Scroll) */}
      <div 
        className="relative overflow-hidden"
        // 3. Add shadow/fade on the side to hint at more content
      >
        <div className="flex space-x-6 pb-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          {destinations.map((item, index) => (
            <article
              key={index} // Using index as key is only acceptable when the list is static and items won't be reordered.
              className="snap-start flex-shrink-0 w-72 sm:w-80 md:w-96 group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5" // 4. Improved card styling
            >
              {/* Image Container with Next/Image for optimization */}
              <div className="relative w-full h-80 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.place}
                  fill // Use 'fill' to make the image take up the parent container
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // 5. Important for performance
                  className="object-cover transition-transform duration-700 group-hover:scale-105" // Subtle scale on hover for a modern effect
                  priority={index < 3} // Load the first few images sooner
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300"></div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 p-6 z-10">
                <Link
                  href={`/destinations/${item.place.toLowerCase().replace(/\s/g, '-')}`} // 6. Use a real, dynamic URL
                  className="text-2xl font-bold text-white mb-1 inline-block hover:text-red-400 transition-colors duration-300"
                >
                  {item.place}
                </Link>
                <p className="text-white/80 text-base">
                  <span className="font-semibold text-red-300">{item.hotelCount.toLocaleString()}</span> Properties
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}