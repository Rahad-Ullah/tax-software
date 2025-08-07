import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 min-h-screen">
      <Image src="/404.png" alt="404" width={500} height={500} />
      <h1 className="text-3xl font-semibold text-muted">
        Sorry, this page is not found.
      </h1>
      <Link href={"/"}>
        <Button className="bg-amber-400 text-muted hover:bg-amber-500">
          <ArrowLeft /> Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
