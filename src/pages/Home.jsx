import Navbar from "@/components/garasi/Navbar";
import Hero from "@/components/garasi/Hero";
import Services from "@/components/garasi/Services";
import FeaturedExperience from "@/components/garasi/FeaturedExperience";
import Process from "@/components/garasi/Process";
import Gallery from "@/components/garasi/Gallery";
import Komitmen from "@/components/garasi/Komitmen";
import Packages from "@/components/garasi/Packages";
import FAQ from "@/components/garasi/FAQ";
import Contact from "@/components/garasi/Contact";
import Footer from "@/components/garasi/Footer";

export default function Home() {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <FeaturedExperience />
        <Process />
        <Gallery />
        <Komitmen />
        <Packages />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}