import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { myFetch } from "@/utils/myFetch";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Tax Payment Software",
  description: "Tax Payment Software",
};

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const res = await myFetch("/users/profile");
  const user = res?.data;

  return (
    <div>
      <Navbar user={user} />
      {children}
      <Footer />
    </div>
  );
}
