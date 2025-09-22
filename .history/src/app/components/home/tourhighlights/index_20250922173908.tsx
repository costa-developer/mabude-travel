"use client";
import { PEOPLE_URL } from "./constants";
import Image from "next/image";

interface ExperienceProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  participants: string;
  priority?: boolean;
}

const ExperienceCard = ({
  backgroundImage,
  title,
  subtitle,
  participants,
  priority = false,
}: ExperienceProps) => {
  return (
    <div className="relative h-full w-full  rounded-3xl overflow-hidden">
      {/* Aspect ratio wrapper to prevent layout shifts */}
      <div className="relative w-full h-full aspect-[16/9]">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority={priority}
        />
      </div>

      <div className="absolute inset-0 flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 z-10">
        {/* Top info */}
        <div className="flex items-center justify-center gap-4">
          <div className="rounded-full bg-[#1F2A2E] p-4">
            <Image
              src="/folded-map.svg"
              alt="experience"
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-white text-lg">{title}</h4>
            <p className="text-white text-sm">{subtitle}</p>
          </div>
        </div>

        {/* Participants */}
        <div className="flex items-center justify-center gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                key={url}
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="font-bold text-white text-base md:text-lg">
            {participants}
          </p>
        </div>
      </div>
    </div>
  );
};

const Experiences = () => {
  return (
    <section className="2xl:max-w-[1920px] bg-secondary relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      {/* Section header */}
      <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left px-6 lg:px-20 mb-10">
        <h2 className="max-w-3xl text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
          Experience <span className="text-[#B6A28F]">Zimbabwe & India</span>
        </h2>
        <p className="max-w-2xl text-white/90 text-base md:text-lg lg:text-xl leading-relaxed">
          Traveling is more than visiting places—it's about culture, wildlife, heritage, and adventure. With Mabude Travel, you'll explore iconic landmarks, stunning landscapes, and unforgettable experiences across Zimbabwe and India.
        </p>
      </div>

      {/* Scrollable experiences */}
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px] will-change-transform">
      <ExperienceCard
    backgroundImage="/images/home/experiences/a.jpg"
    title="Zimbabwe"
    subtitle="Experience the diverse culture, wildlife, and landscapes"
    participants="20+ Adventurers"
    priority
  />

  {/* India Experience */}
  <ExperienceCard
    backgroundImage="/images/home/experiences/c.jpg"
    title="India"
    subtitle="Explore rich heritage, vibrant culture, and natural beauty"
    participants="12+ Travelers"
  />
      </div>

      {/* Explore CTA */}
      <div className="flex items-end justify-end mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-[#B6A28F] p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-3xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="text-white capitalize text-2xl md:text-3xl 2xl:text-6xl">
            <strong>Explore Zimbabwe & India</strong> And Experience Their Wonders
          </h2>
          <p className="text-white text-sm xl:text-base mt-5">
            Immerse yourself in the diverse beauty and culture of Zimbabwe and India. Witness the grandeur of Victoria Falls, go on thrilling safaris, marvel at majestic palaces, visit the Taj Mahal, or unwind on Goa’s beaches. Every adventure promises unforgettable memories.
          </p>
          <Image
            src="/quote.svg"
            alt="experiences-quote"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};


export default Experiences;
