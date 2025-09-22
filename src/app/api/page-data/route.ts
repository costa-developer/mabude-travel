import { NextResponse } from "next/server";

const avatarList = [
  { image: "/images/avatar/avatar_1.jpg", title: "Sarah Johnson" },
  { image: "/images/avatar/avatar_2.jpg", title: "Olivia Miller" },
  { image: "/images/avatar/avatar_3.jpg", title: "Sophia Roberts" },
  { image: "/images/avatar/avatar_4.jpg", title: "Isabella Clark" },
];

const statsFactData = {
  number: '02',
  name: "Global Recognition",
  heading: "Zimbabwe & India Tourism Highlights",
  description: "Mabude Travel brings you curated experiences across Zimbabwe and India. Explore the natural wonders, rich history, and vibrant cultures of these incredible destinations with world-class guided tours.",
  scoreData: [
    { number: 4.7, numberValue: 'M+', scoreDescp: "Annual visitors exploring Zimbabwe & India’s landmarks and natural wonders" },
    { number: 1, scoreDescp: "Voted a top travel experience by international travel enthusiasts" },
    { number: 948, numberValue: 'K+', scoreDescp: "Tourists visiting Victoria Falls each year" },
    { number: 106, numberValue: 'K+', scoreDescp: "Jobs supported by the local tourism industries" },
  ],
};

const ToursData = { 
  number: '01',
  heading: "Explore Zimbabwe & India’s Iconic Destinations",
  description: "Join Mabude Travel on expertly guided tours across Zimbabwe and India. From the breathtaking Victoria Falls and Hwange National Park to the iconic Taj Mahal and vibrant Rajasthan, experience unforgettable adventures, rich culture, and stunning landscapes.",
};

const testimonialData = {
  data_1: {
    preTitle: "Traveler Stories",
    title: "The Victoria Falls and Hwange safari tour was amazing. Everything was perfectly organized and the scenery was unforgettable.",
    author: "Callister",
    company: "Visitor from UK",
  },
  data_2: {
    preTitle: "Traveler Stories",
    title: "From the Taj Mahal to Rajasthan, every experience with Mabude Travel was seamless and enriching. Highly recommended!",
    author: "Warren",
    company: "Visitor from USA",
  },
  data_3: {
    preTitle: "Traveler Stories",
    title: "Professional guides, well-planned itineraries, and incredible cultural experiences. Zimbabwe & India came alive for us!",
    author: "Xavier",
    company: "Mabude Travel Guest",
  },
};

const teamData = {
  number: '05',
  data: [
    {
      image: "/images/home/team/tendai.jpg",
      name: "Tendai",
      position: "Lead Tour Guide",
      socialLinks: [
        { icon: "/images/socialIcon/linkedin.svg", link: "https://linkedin.com" },
      ],
    },
    {
      image: "/images/home/team/tendai.jpg",
      name: "Nomsa",
      position: "Cultural Tour Specialist",
      socialLinks: [
        { icon: "/images/socialIcon/linkedin.svg", link: "https://linkedin.com" },
      ],
    },
    {
      image: "/images/home/team/tendai.jpg",
      name: "David",
      position: "Adventure Guide",
      socialLinks: [
        { icon: "/images/socialIcon/linkedin.svg", link: "https://linkedin.com" },
      ],
    },
    {
      image: "/images/home/team/tendai.jpg",
      name: "Lerato",
      position: "Heritage & Wildlife Coordinator",
      socialLinks: [
        { icon: "/images/socialIcon/linkedin.svg", link: "https://linkedin.com" },
      ],
    },
  ],
};

const pricingData = {
  data: [
    {
      planName: "Zimbabwe Explorer",
      planPrice: "$850",
      planDescp: "Perfect for first-time visitors wanting to experience Zimbabwe’s highlights in a single day.",
      planIncludes: [
        "Full-day Victoria Falls tour",
        "Hwange National Park safari",
        "Local guided experiences",
        "Transport included",
      ],
    },
    {
      planName: "India Adventure",
      tag: "Most popular",
      planPrice: "$1,850",
      cancelPrice: "$2,200",
      planDescp: "Ideal for travelers looking to explore India’s iconic landmarks, culture, and landscapes.",
      planIncludes: [
        "Full-day Taj Mahal tour",
        "Rajasthan cultural experiences",
        "Kerala backwaters cruise",
        "Transport & guided services included",
      ],
    },
    {
      planName: "Ultimate Zimbabwe & India",
      planPrice: "$3,200",
      planDescp: "A premium experience combining top attractions of Zimbabwe and India with luxury services.",
      planIncludes: [
        "Victoria Falls & Hwange safari",
        "Taj Mahal & Rajasthan tour",
        "Kerala backwaters cruise",
        "Luxury transport & accommodations",
      ],
    },
  ],
  partnerLogo: [
    { light: "/images/home/pricing/partner-1.svg", dark: "/images/home/pricing/partner-dark-1.svg" },
    { light: "/images/home/pricing/partner-2.svg", dark: "/images/home/pricing/partner-dark-2.svg" },
    { light: "/images/home/pricing/partner-3.svg", dark: "/images/home/pricing/partner-dark-3.svg" },
    { light: "/images/home/pricing/partner-4.svg", dark: "/images/home/pricing/partner-dark-4.svg" },
    { light: "/images/home/pricing/partner-5.svg", dark: "/images/home/pricing/partner-dark-5.svg" },
  ],
};

const faqData = {
  data: [
    {
      faq_que: "What is included in your Zimbabwe & India tours?",
      faq_ans: "Our tours include guided experiences at iconic locations, cultural and wildlife activities, transportation, and assistance with bookings. Specific inclusions depend on the selected package."
    },
    {
      faq_que: "Do you offer private/custom tours?",
      faq_ans: "Yes, we can tailor tours to your interests and schedule in Zimbabwe or India."
    },
    {
      faq_que: "Are entry tickets included?",
      faq_ans: "Most entry tickets, such as Victoria Falls park fees or Taj Mahal tickets, are not included, but we provide guidance and booking support."
    },
    {
      faq_que: "Do tours include meals?",
      faq_ans: "Some packages include meals. Otherwise, we stop at recommended local restaurants or provide time to explore dining options."
    },
    {
      faq_que: "How do I book a tour?",
      faq_ans: "You can book directly on our website, via email, or by phone. Payments are secure and confirmations are sent instantly."
    },
  ],
};

const contactData = {
  keypoint: ["24/7 Customer Support", "Guided Tours Across Zimbabwe & India"],
  managerProfile: {
    image: "/images/avatar/avatar_1.jpg",
    name: "Courtney Henry",
    position: "Tour Operations Manager",
  },
};

const aboutusStats = [
  {
    number: 2025,
    postfix: "",
    title: "Year of Travel",
    descp: "Recognized for exceptional travel experiences across Zimbabwe & India in 2025.",
  },
  {
    number: 4.7,
    postfix: "M+",
    title: "Happy Travelers",
    descp: "Visitors exploring Zimbabwe & India’s natural, cultural, and historic attractions annually.",
  },
  {
    number: 300,
    postfix: "+",
    title: "Unique Experiences",
    descp: "From safaris and waterfalls to heritage tours and cultural walks, Mabude Travel offers unforgettable adventures.",
  },
];

const servicesSliderData = [
  "Victoria Falls & Hwange Safari",
  "Taj Mahal & Rajasthan Tours",
  "Kerala Backwaters Cruise",
  "Cultural & Heritage Experiences",
  "Adventure Activities (Hiking, Wildlife, Exploration)",
  "Local Market & Food Tours",
  "Custom Private Tours",
];

export const GET = async () => {
  return NextResponse.json({
    avatarList,
    statsFactData,
    ToursData,
    testimonialData,
    teamData,
    pricingData,
    faqData,
    contactData,
    aboutusStats,
    servicesSliderData,
  });
};
