"use client";

import { Button } from "@/components/ui/button";
import { sidebarMenus } from "@/constants/sidebar-menus";
import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Sidebar = ({ user }: { user?: any }) => {
  const currentPath = usePathname();
  const router = useRouter();

  // handle logout
  const handleLogout = () => {
    Cookies.remove("accessToken");
    router.push("/login");
  };

  return (
    <div className="bg-[#FCFCFD] p-6 rounded-lg min-w-xs min-h-[80vh] flex flex-col justify-between">
      <section>
        <div className="flex flex-col gap-2 items-center text-center py-12">
          <Image
            src={
              user?.image
                ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${user?.image}`
                : "/profile.png"
            }
            alt="logo"
            width={100}
            height={24}
            className="size-24 rounded-full border-2 border-yellow-400"
          />
          <h3 className="text-lg text-muted">{user?.name || "John Doe"}</h3>
          <p className="text-muted-foreground">
            {user?.email || "johndoe@example.com"}
          </p>
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
        <Button
          onClick={handleLogout}
          className="w-full justify-start mt-4 rounded bg-white text-muted-foreground shadow-none hover:text-white"
        >
          <LogOut size={24} /> Log Out
        </Button>
      </section>
    </div>
  );
};

export default Sidebar;
