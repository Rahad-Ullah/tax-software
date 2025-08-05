import Certified from "@/components/pages/home/Certified";
import Contact from "@/components/pages/home/Contact";
import Features from "@/components/pages/home/Features";
import HeroSection from "@/components/pages/home/HeroSection";
import WhyTrust from "@/components/pages/home/WhyTrust";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <WhyTrust />
      <Features />
      <Certified />
      <Contact />
    </div>
  );
}
