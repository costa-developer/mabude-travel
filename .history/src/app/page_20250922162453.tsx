import { Metadata } from "next";
import Faq from "./components/home/faq";
import HeroSection from "./components/home/hero";
import StatsFacts from "./components/home/stats-facts";
import Testimonialss from "./components/home/testimonial";
import CustomeJourneys from "./components/home/customjourneys";
import Experiences from "./components/home/tourhighlights";
import AllToursData from "./components/home/tours";
import AboutusFullimg from "./components/about/aboutus-fullimg";

export const metadata: Metadata = {
    title: "Digitalizeiq",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <AllToursData />
      </section>

      <StatsFacts/>
      {/* <CustomeJourneys /> */}
      <AboutusFullimg />
     {/* <Experiences /> */}
      <Faq/>
      <Testimonialss />
    </>
  );
}
