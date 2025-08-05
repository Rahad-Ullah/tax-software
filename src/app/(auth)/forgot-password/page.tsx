import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const ForgotPasswordPage = () => {
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="py-16 px-8 max-w-xl mx-auto">
        <section className="flex flex-col items-center text-center gap-2">
          <Image
            src="/logo.png"
            alt="logo"
            width={150}
            height={150}
            className="mb-8"
          />
          <h1 className="text-3xl font-semibold text-muted">
            Change or reset your password
          </h1>
          <p className="text-muted-foreground">
            Please enter your email to reset your password
          </p>
        </section>
        <section className="grid gap-4 my-8">
          <div className="grid gap-2">
            <Label>Email</Label>
            <Input type="email" placeholder="Enter Your Email" />
          </div>
          <Button className="mt-4">Send a code</Button>
        </section>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
