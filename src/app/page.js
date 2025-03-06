import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import ContactTop from "@/components/ContactTop";
import Explore from "@/components/Explore";
import HeroSection from "@/components/HeroSection";
import Welcome from "@/components/Welcome";


export default function Home() {
  return (
    <div>
      <ContactTop />
      <HeroSection />
      <Welcome />
      <Explore />
      <Clients />
      <Contact />
    </div>
  );
}
