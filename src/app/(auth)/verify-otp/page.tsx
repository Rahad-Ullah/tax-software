import OtpVerifyForm from "@/components/forms/OtpVerifyForm";
import Image from "next/image";

const VerifyOtpPage = () => {
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
            Check Your Email
          </h1>
          <p className="text-muted-foreground">
            We sent a reset link to abc@..com enter 4 digit code that mentioned
            in the email
          </p>
        </section>
        <section className="grid gap-4 my-8">
          <OtpVerifyForm />
        </section>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
