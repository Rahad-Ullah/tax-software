import ResetPasswordForm from "@/components/forms/ResetPassword";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Suspense } from "react";

const ResetPasswordPage = () => {
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
            Set a New Password
          </h1>
          <p className="text-muted-foreground">
            Create a new password. Ensure it differs from previous ones for
            security
          </p>
        </section>
        <section className="grid gap-4 my-8">
          <Suspense
            fallback={<div className="text-center py-6">Loading...</div>}
          >
            <ResetPasswordForm />
          </Suspense>
        </section>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
