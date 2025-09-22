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

const SHOW_EXPERIENCES = false;

export default function Home() {
  return (
    <>
      <HeroSection />
      <AllToursData />
      <StatsFacts />
      <AboutusFullimg />
      {SHOW_EXPERIENCES ? <Experiences /> : <div id="experiences-placeholder" style={{minHeight: 300}}>Experiences disabled</div>}
      <Faq/>
      <Testimonialss />
    </>
  );
}
