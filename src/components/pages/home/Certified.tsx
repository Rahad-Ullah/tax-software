import Container from "@/components/shared/Container";
import Image from "next/image";
import netfileIcon from "../../../assets/netfile-certificate.svg";
import womenImage from "../../../assets/women-with-laptop.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Certified = () => {
  return (
    <div className="bg-[#FEEBEA] py-20">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <section>
          <Image src={womenImage} alt="women-image" width={550} height={550} />
        </section>
        <section className="grid gap-6">
          <div className="flex items-center gap-4">
            <Image
              src={netfileIcon}
              alt="netfile-icon"
              width={80}
              height={80}
            />
            <div>
              <h1 className="text-[44px] font-semibold text-primary">
                CRA NETFILE
              </h1>
              <p className="text-lg text-muted">Certified</p>
            </div>
          </div>
          <p className="text-[#858585] text-xl">
            File your tax return directly with the CRA (and Revenu Quebec)
            electronically instead of printing and mailing it in. Filing using
            NETFILE is easier than ever using UFile's streamlined process, and
            you can get your refund in as few as 8 days.
          </p>
          <Button
            variant={"outline"}
            className="border-primary text-primary w-fit"
          >
            See All Features <ArrowRight />
          </Button>
        </section>
      </Container>
    </div>
  );
};

export default Certified;
