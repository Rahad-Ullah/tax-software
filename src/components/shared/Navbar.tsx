"use client";

import { navbarMenus } from "@/constants/navbar-menus";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

const Navbar = () => {
  const currentPath = usePathname();

  return (
    <div className="bg-[#F9F9F9] py-4">
      <Container>
        <div className="flex justify-between items-center">
          <section>
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={100}
              height={24}
              className="rounded-md"
            />
          </section>
          <section>
            <ul className="flex gap-8">
              {navbarMenus.map((item) => (
                <Link
                  href={item.path}
                  key={item.title}
                  className="px-2 text-[#3D3D3D]"
                >
                  <li className="flex flex-col items-center">
                    <span>{item.title}</span>
                    {currentPath === item.path && (
                      <span className="w-10 h-1 bg-primary rounded-full"></span>
                    )}
                  </li>
                </Link>
              ))}
            </ul>
          </section>
          <section>
            <Link href={""}>
              <Image
                src="/profile.png"
                alt="Profile Picture"
                width={50}
                height={50}
                className="rounded-full"
              />
            </Link>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
