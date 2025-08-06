"use client";

import { navbarMenus } from "@/constants/navbar-menus";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

const Navbar = ({ user = {} }: { user?: any }) => {
  const currentPath = usePathname();

  return (
    <div className="bg-[#F9F9F9] py-4">
      <Container>
        <div className="flex justify-between items-center">
          <section>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Company Logo"
                width={100}
                height={24}
                className="rounded-md"
              />
            </Link>
          </section>
          <section>
            <ul className="lg:flex gap-8">
              {navbarMenus.map((item) => (
                <Link
                  href={item.path}
                  key={item.title}
                  className="px-2 text-[#3D3D3D]"
                >
                  <li className="flex flex-col items-center">
                    <span>{item.title}</span>
                    <span
                      className={`w-10 h-1 bg-primary rounded-full ${
                        item.path === currentPath ? "block" : "hidden"
                      }`}
                    ></span>
                  </li>
                </Link>
              ))}
            </ul>
          </section>
          <section>
            <Link href={"/dashboard/profile"}>
              <Image
                src={
                  user?.image
                    ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${user?.image}`
                    : "/profile.png"
                }
                alt="Profile Picture"
                width={50}
                height={50}
                className="rounded-full size-14"
              />
            </Link>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
