import Container from "@/components/shared/Container";
import Image from "next/image";
import locationIcon from "../../../assets/icons/location-icon.svg";
import emailIcon from "../../../assets/icons/email-icon.svg";
import socialIcon from "../../../assets/icons/social-icon.svg";
import phoneIcon from "../../../assets/icons/phone-icon.svg";

const Contact = () => {
  return (
    <div className="py-20">
      <Container>
        <section className="flex flex-col items-center gap-6">
          <h1 className="text-4xl font-semibold text-muted">
            More questions?{" "}
            <span className="font-normal text-muted-foreground">
              We have answers.
            </span>
          </h1>
        </section>
        <section className="grid grid-cols-1 md::grid-cols-2 lg:grid-cols-4 gap-12 mt-12">
          <div className="p-12 shadow rounded-xl relative text-[#858585]">
            <h1 className="text-xl font-medium">Location</h1>
            <p>4539 N 22nd Street, STE R, Phoenix, AZ 85016</p>
            <Image
              src={locationIcon}
              alt="location-icon"
              width={62}
              height={62}
              className="absolute top-8 -left-8"
            />
          </div>
          <div className="p-12 shadow rounded-xl relative text-[#858585]">
            <h1 className="text-xl font-medium">Email</h1>
            <p>anu@gmail.com</p>
            <Image
              src={emailIcon}
              alt="email-icon"
              width={62}
              height={62}
              className="absolute top-8 -left-8"
            />
          </div>
          <div className="p-12 shadow rounded-xl relative text-[#858585]">
            <h1 className="text-xl font-medium">Social</h1>
            <p>
              linkedin.com/in/ana <br /> facebook.com/ana
            </p>
            <Image
              src={socialIcon}
              alt="social-icon"
              width={62}
              height={62}
              className="absolute top-8 -left-8"
            />
          </div>
          <div className="p-12 shadow rounded-xl relative text-[#858585]">
            <h1 className="text-xl font-medium">Get in touch</h1>
            <p>+9 0125478412</p>
            <Image
              src={phoneIcon}
              alt="phone-icon"
              width={62}
              height={62}
              className="absolute top-8 -left-8"
            />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Contact;
