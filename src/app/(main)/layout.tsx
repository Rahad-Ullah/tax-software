import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Tax Payment Software",
  description: "Tax Payment Software",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
