import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth | Tax Payment Software",
  description: "Tax Payment Software",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
