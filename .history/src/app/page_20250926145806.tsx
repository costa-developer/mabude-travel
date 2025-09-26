import { Metadata } from "next";
import Faq from "./components/home/faq";
import HeroSection from "./components/home/hero";
import StatsFacts from "./components/home/stats-facts";
import Testimonialss from "./components/home/testimonial";
import CustomeJourneys from "./components/home/customjourneys";
import Experiences from "./components/home/tourhighlights";
import AllToursData from "./components/home/tours";
import AboutusFullimg from "./components/about/aboutus-fullimg";
import TopDestinationOne from "./components/home/destination";

export const metadata: Metadata = {
    title: "Mabude Travels",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <AllToursData /> */}
      <StatsFacts/>
      <TopDestinationOne />
      {/* <CustomeJourneys /> */}
     {/* <Experiences /> */}
      <Faq/>
      <AboutusFullimg />
      <Testimonialss />
    </>
  );
}
