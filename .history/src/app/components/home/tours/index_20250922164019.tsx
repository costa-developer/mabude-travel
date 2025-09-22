"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { Carousel, Card } from "../../ui/apple-cards-carousel";

function AllToursData() {
  const [toursData, setToursData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setToursData(data?.ToursData || dummyData); // fallback to dummy data
      } catch (error) {
        console.error(error);
        setToursData(dummyData); // fallback
      }
    };
    fetchData();
  }, []);

  // Memoize cards to avoid unnecessary re-renders
  const cards = useMemo(
    () =>
      (toursData?.cards || []).map((card: any) => (
        <Card key={card.src} card={card} />
      )),
    [toursData]
  );

  return (
    <section className="relative bg-secondary py-20 md:py-32 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Heading & description */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {toursData?.heading || "Explore Zimbabwe & India"}
          </h2>
          <p className="text-white/70 mb-10">
            {toursData?.description ||
              "Join Mabude Travel on unforgettable adventures across Zimbabwe and India. Experience breathtaking landscapes, rich history, and vibrant cultures with our expertly guided tours."}
          </p>
        </div>

        {/* Carousel inside the container */}
        <div className="mt-10">
          <Carousel items={cards} />
        </div>
      </div>
    </section>
  );
}

export default AllToursData;

interface DummyContentProps {
  title: string;
  description: string;
}

const DummyContent: React.FC<DummyContentProps> = ({ title, description }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {title}
        </span>{" "}
        {description}
      </p>
      <div className="relative w-full md:w-1/2 h-[300px] md:h-[500px] mx-auto">
        <Image
          src="https://assets.aceternity.com/macbook.png"
          alt="Tour demo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

// Dummy data for Zimbabwe & India tours
const dummyData = {
  heading: "Discover Zimbabwe & India",
  description:
    "Experience the wonders of Zimbabwe and India with Mabude Travel. From Victoria Falls and Hwange National Park to the Taj Mahal and vibrant Rajasthan, our tours immerse you in nature, culture, and history.",
  cards: [
    {
      category: "Zimbabwe",
      title: "Victoria Falls Adventure",
      price: "$450",
      period: "Full Day",
      src: "/images/tours/zimbabwe1.jpg",
      content: (
        <DummyContent
          title="Breathtaking Waterfalls"
          description="Witness the majestic Victoria Falls, one of the natural wonders of the world, and explore the surrounding rainforest trails."
        />
      ),
    },
    {
      category: "Zimbabwe",
      title: "Hwange Safari",
      price: "$500",
      period: "2 Days",
      src: "/images/tours/zimbabwe2.jpg",
      content: (
        <DummyContent
          title="Wildlife Adventure"
          description="Embark on a thrilling safari in Hwange National Park, home to elephants, lions, and a variety of wildlife."
        />
      ),
    },
    {
      category: "India",
      title: "Taj Mahal Tour",
      price: "$400",
      period: "Half Day",
      src: "/images/tours/india1.jpg",
      content: (
        <DummyContent
          title="Iconic Heritage"
          description="Visit the magnificent Taj Mahal, one of the seven wonders of the world, and learn about its rich history."
        />
      ),
    },
    {
      category: "India",
      title: "Rajasthan Cultural Experience",
      price: "$600",
      period: "3 Days",
      src: "/images/tours/india2.jpg",
      content: (
        <DummyContent
          title="Palaces & Forts"
          description="Explore Jaipur and Udaipur, with their stunning palaces, forts, and vibrant local markets."
        />
      ),
    },
    {
      category: "India",
      title: "Kerala Backwaters",
      price: "$550",
      period: "2 Days",
      src: "/images/tours/india3.jpg",
      content: (
        <DummyContent
          title="Tranquil Waterways"
          description="Cruise the serene backwaters of Kerala on a traditional houseboat, surrounded by lush landscapes."
        />
      ),
    },
  ],
};
