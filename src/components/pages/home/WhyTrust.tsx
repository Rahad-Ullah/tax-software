import Container from "@/components/shared/Container";
import starIcon from "../../../assets/icons/start-icon.svg";
import Image from "next/image";
import trustImage1 from "../../../assets/trust-1.png";
import trustImage2 from "../../../assets/trust-2.png";
import trustImage3 from "../../../assets/trust-3.png";
import redVector from "../../../assets/red-vector.png";
import { Button } from "@/components/ui/button";

const WhyTrust = () => {
  return (
    <div className="py-20">
      <Container>
        <section className="flex flex-col items-center gap-6">
          <h1 className="text-4xl font-semibold text-muted">Why trust ###</h1>
          <div className="flex items-center gap-6">
            <Image src={starIcon} alt="star-icon" width={32} height={32} />
            <Image src={starIcon} alt="star-icon" width={32} height={32} />
            <Image src={starIcon} alt="star-icon" width={32} height={32} />
            <Image src={starIcon} alt="star-icon" width={32} height={32} />
            <Image src={starIcon} alt="star-icon" width={32} height={32} />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-center">
            Over a million Canadians put their trust in UFile products every
            year. File smart with UFile’s 20 years of experience serving
            Canadian taxpayers.
          </p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="grid">
            <Image
              src={trustImage1}
              alt="trust-image"
              width={524}
              height={340}
              className="h-fit"
            />
            <div className="z-50 text-white relative -mt-29">
              <Image
                src={redVector}
                alt="trust-image"
                width={524}
                height={300}
                className=" rounded-[10px]"
              />
              <div className="grid gap-4 p-6 absolute bottom-0">
                <h1 className="text-2xl font-medium">
                  Are you self- employed?
                </h1>
                <p>
                  ### is perfect for freelance and all kinds of self-employment
                  returns, from simple to the most complex.
                </p>
                <Button variant="outline" className="w-fit ml-auto">START NOW</Button>
              </div>
            </div>
          </div>
          <div className="grid">
            <Image
              src={trustImage2}
              alt="trust-image"
              width={524}
              height={340}
              className="h-fit"
            />
            <div className="z-50 text-white relative -mt-29">
              <Image
                src={redVector}
                alt="trust-image"
                width={524}
                height={300}
                className=" rounded-[10px]"
              />
              <div className="grid gap-4 p-6 absolute bottom-0">
                <h1 className="text-2xl font-medium">
                  Have lots of investment income?
                </h1>
                <p>
                  ### is perfect for freelance and all kinds of self-employment
                  returns, from simple to the most complex.
                </p>
                <Button variant="outline" className="w-fit ml-auto">START NOW</Button>
              </div>
            </div>
          </div>
          <div className="grid">
            <Image
              src={trustImage3}
              alt="trust-image"
              width={524}
              height={340}
              className="h-fit"
            />
            <div className="z-50 text-white relative -mt-29">
              <Image
                src={redVector}
                alt="trust-image"
                width={524}
                height={300}
                className=" rounded-[10px]"
              />
              <div className="grid gap-4 p-6 absolute bottom-0">
                <h1 className="text-2xl font-medium">
                  Do you have rental properties?
                </h1>
                <p>
                  ### is perfect for freelance and all kinds of self-employment
                  returns, from simple to the most complex.
                </p>
                <Button variant="outline" className="w-fit ml-auto">START NOW</Button>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default WhyTrust;
