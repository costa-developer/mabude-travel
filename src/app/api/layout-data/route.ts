import { NextResponse } from "next/server";

const MenuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Tours & Experiences",
    path: "/#tours",
    newTab: false,
  },
  {
    id: 4,
    title: "Destinations",
    path: "/#destinations",
    newTab: false,
  },
  {
    id: 5,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];

const footerData = {
    name: "Mabude Travel",
    tagline: "Discover the Wonders of Zimbabwe & India",
    info: [
        {
            icon: "/images/footer/email-arrow.svg",
            link: "info@mabudetravel.com",
            href: "mailto:info@mabudetravel.com"
        },
        {
            icon: "/images/footer/Location.svg",
            link: "Zimbabwe & India",
            href: "https://maps.app.goo.gl/YourLocationLink"
        }
    ],
    links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Tours & Experiences", href: "/#tours" },
        { name: "Destinations", href: "/#destinations" },
        { name: "Blog", href: "/blog" },
        { name: "Privacy Policy", href: "/privacy-policy" },
    ],
    socialLinks: [
        { name: "Facebook", href: "https://www.facebook.com/MabudeTravel" },
        { name: "Youtube", href: "https://www.youtube.com/@MabudeTravel" },
    ],
    copyright: "© Mabude Travel 2025"
};

export const GET = async () => {
    return NextResponse.json({
        footerData,
        MenuData
    });
};
