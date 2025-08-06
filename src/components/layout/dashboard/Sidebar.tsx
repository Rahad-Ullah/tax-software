"use client";

import { Button } from "@/components/ui/button";
import { sidebarMenus } from "@/constants/sidebar-menus";
import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const currentPath = usePathname();

  return (
    <div className="bg-[#FCFCFD] p-6 rounded-lg min-w-xs min-h-[80vh] flex flex-col justify-between">
      <section>
        <div className="flex flex-col gap-2 items-center text-center py-12">
          <Image
            src="/profile.png"
            alt="logo"
            width={100}
            height={24}
            className="rounded-full border-2 border-yellow-400"
          />
          <h3 className="text-lg text-muted">Silverson Donna</h3>
          <p className="text-muted-foreground">silverson@gmail.com</p>
        </div>

        <ul className="flex flex-col gap-4">
          {sidebarMenus?.map((item) => (
            <li
              key={item.title}
              className={`rounded ${
                item.path === currentPath
                  ? "bg-primary text-white"
                  : "bg-[#F6F6F6] text-muted-foreground hover:text-primary"
              }`}
            >
              <Link
                href={item.path}
                className="py-3 px-4 flex items-center gap-2"
              >
                <item.icon />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <Button className="w-full justify-start rounded bg-white text-muted-foreground shadow-none hover:text-white">
          <LogOut size={24} /> Log Out
        </Button>
      </section>
    </div>
  );
};

export default Sidebar;
