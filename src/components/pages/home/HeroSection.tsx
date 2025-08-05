import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { ShieldCheck, SquareCheck, Zap } from "lucide-react";
import Image from "next/image";
import canadaIcon from "../../../assets/canada.svg";
import bestPicIcon from "../../../assets/best-pick-certificate.svg";
import netfileIcon from "../../../assets/netfile-certificate.svg";
import heroImage from "../../../assets/hero-image.png";

const HeroSection = () => {
  return (
    <div className="py-24 bg-gradient-to-r from-[#F8FAFF]">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <section className="flex flex-col gap-6">
          <span className="flex items-center gap-2 bg-[#FEEBEA] py-3 px-8 rounded-full text-secondary w-fit">
            <Zap />
            <span>BEST RESULTS. GUARANTEED.</span>
          </span>
          <h1 className="text-5xl font-semibold text-muted">
            ### <span className="text-primary">ONLINE</span> 2024
          </h1>
          <p className="text-xl text-muted-foreground">
            Over a million Canadians put their trust in our tax software every
            year. Experience the easiest way to file your taxes online.
          </p>
          <p className="flex items-center gap-4 text-muted">
            <span className="flex items-center gap-2">
              <ShieldCheck size={20} className="text-primary" />
              100% Canadian Software
            </span>
            <span className="flex items-center gap-2">
              <SquareCheck size={20} className="text-green-500" />
              CRA Certified
            </span>
          </p>
          <Button className="w-fit text-lg">Start for FREE</Button>
          <p className="flex items-center gap-4 text-muted-foreground">
            <Image
              src={canadaIcon}
              alt="Company Logo"
              width={24}
              height={24}
              className="rounded-md"
            />
            <span>### is 100% CANADIAN Software</span>
          </p>
          <div className="flex items-center gap-4">
            <Image
              src={netfileIcon}
              alt="Certificate"
              width={80}
              height={80}
              className="rounded-md"
            />
            <Image
              src={bestPicIcon}
              alt="Certificate"
              width={80}
              height={80}
              className="rounded-md"
            />
          </div>
        </section>
        <section>
          <Image
            src={heroImage}
            alt="Hero Image"
            width={500}
            height={500}
            className="rounded-md w-full"
          />
        </section>
      </Container>
    </div>
  );
};

export default HeroSection;
