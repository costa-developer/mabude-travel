import { StaticImageData } from 'next/image';

export type Props = {
  testimony: string;
  person: string;
  avatar: string; 
};

export const testimonials: Props[] = [
  {
    testimony:
      "Our Victoria Falls tour in Zimbabwe was absolutely mesmerizing! The scenery and wildlife were unforgettable.",
    person: 'Sarah Johnson',
    avatar: '/images/robert_fox.png',
  },
  {
    testimony:
      "Exploring India’s Golden Triangle was a dream come true. The culture, food, and historical sites exceeded all expectations.",
    person: 'James Smith',
    avatar: '/images/robert_fox.png',
  },
  {
    testimony:
      "Safari adventures in Hwange National Park combined with India’s vibrant cities gave us the perfect mix of nature and culture. Highly recommend Mabude Travel!",
    person: 'Olivia Brown',
    avatar: '/images/robert_fox.png',
  },
];

export const desktopHeaderPhrase = ['Discover', 'Zimbabwe & India Tours & Experiences'];
