import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Leadership from "@/components/sections/Leadership";
import Services from "@/components/sections/Services";
import SocialSafe from "@/components/sections/SocialSafe";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialSafe />
      <About />
      <Leadership />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
