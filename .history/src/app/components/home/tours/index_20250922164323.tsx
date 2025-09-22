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
        setToursData(data?.ToursData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // Memoize cards to avoid unnecessary re-renders
  const cards = useMemo(
    () => data.map((card) => <Card key={card.src} card={card} />),
    []
  );

  return (
    <section className="relative bg-secondary py-20 md:py-32 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Heading & description */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {toursData?.heading}
          </h2>
          <p className="text-white/70 mb-10">{toursData?.description}</p>
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
          alt="Chatbot demo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

const data = [
  {
    category: "Victoria Falls",
    title: "Falls & Safari Adventure",
    price: "$350",
    period: "2-3 hours",
    src: "/images/tours/a.jpg",
    content: (
      <DummyContent
        title="Breathtaking Views"
        description="Marvel at the stunning Victoria Falls and explore the surrounding landscapes. Safari drives offer a chance to spot wildlife up close."
      />
    ),
  },
  {
    category: "Hwange National Park",
    title: "Safari & Wildlife",
    price: "$350",
    period: "Half Day",
    src: "/images/tours/b.jpg",
    content: (
      <DummyContent
        title="Wildlife Encounters"
        description="Experience one of Africa’s top wildlife reserves. Spot elephants, lions, and rhinos on guided safari tours."
      />
    ),
  },
  {
    category: "Rajasthan",
    title: "Palaces & Culture",
    price: "$350",
    period: "Full Day",
    src: "/images/tours/c.jpg",
    content: (
      <DummyContent
        title="Royal Heritage"
        description="Explore the majestic palaces, forts, and vibrant streets of Rajasthan. Immerse yourself in India’s rich cultural heritage."
      />
    ),
  },
  {
    category: "Taj Mahal",
    title: "Iconic Landmark Tour",
    price: "$350",
    period: "3-4 hours",
    src: "/images/tours/a.jpg",
    content: (
      <DummyContent
        title="World Wonder"
        description="Visit the Taj Mahal, one of the seven wonders of the world. Learn its history and admire the stunning architecture."
      />
    ),
  },
  {
    category: "Beaches",
    title: "Goa & Coastal Adventures",
    price: "$350",
    period: "Half Day",
    src: "/images/tours/b.jpg",
    content: (
      <DummyContent
        title="Relax & Unwind"
        description="Soak up the sun on Goa’s golden beaches. Enjoy water sports, local cuisine, and the vibrant coastal atmosphere."
      />
    ),
  },
  {
    category: "Adventure",
    title: "Hiking & Exploration",
    price: "$350",
    period: "Full Day",
    src: "/images/tours/c.jpg",
    content: (
      <DummyContent
        title="Thrill Seekers Welcome"
        description="From mountain treks in Zimbabwe to cultural exploration in India, experience unforgettable adventures with Mabude Travel."
      />
    ),
  },
];

