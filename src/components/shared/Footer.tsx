import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-secondary text-white py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 py-4">
          <section>
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={100}
              height={24}
              className="rounded-md mb-6"
            />
            <p className="font-normal">
              Empowering individuals through programs that unlock new career
              growth opportunities, enhancing skills and advancing professional
              success.
            </p>
          </section>
          <section>
            <h3 className="font-semibold text-lg">Useful links</h3>
            <ul className="flex flex-col gap-4 mt-4">
              <Link href="#" className="hover:text-primary transition-all duration-300">About Us</Link>
              <Link href="#" className="hover:text-primary transition-all duration-300">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary transition-all duration-300">Terms & Condition</Link>
            </ul>
          </section>
          <section>
            <h3 className="font-semibold text-lg">Learning</h3>
            <ul className="flex flex-col gap-4 mt-4">
              <Link href="#" className="hover:text-primary transition-all duration-300">Web Development</Link>
              <Link href="#" className="hover:text-primary transition-all duration-300">Game development 3D</Link>
              <Link href="#" className="hover:text-primary transition-all duration-300">Microsoft Excel</Link>
              <Link href="#" className="hover:text-primary transition-all duration-300">iOS & Swift</Link>
              <Link href="#" className="hover:text-primary transition-all duration-300">UI UX Design</Link>
            </ul>
          </section>
          <section>
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <ul className="flex flex-col gap-4 mt-4">
              <p className="flex gap-2">
                <MapPin className="text-primary" />
                <span>4539 N 22nd Street, STE R, Phoenix, AZ 85016</span>
              </p>
              <p className="flex gap-2">
                <Phone className="text-primary" />
                <span>+9 0125478412</span>
              </p>
              <p className="flex gap-2">
                <Mail className="text-primary" />
                <span>rahadullah10@gmail.com</span>
              </p>
            </ul>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
