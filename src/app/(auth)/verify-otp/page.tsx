import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Link from "next/link";

const VerifyOtpPage = () => {
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="py-16 px-8 max-w-xl mx-auto">
        <section className="flex flex-col items-center text-center gap-2">
          <h1 className="text-3xl font-semibold text-muted">
            Check Your Email
          </h1>
          <p className="text-muted-foreground">
            We sent a reset link to abc@..com enter 4 digit code that mentioned
            in the email
          </p>
        </section>
        <section className="grid gap-4 my-8">
          <div className="flex justify-center">
            <InputOTP maxLength={4}>
              <InputOTPGroup className="flex justify-center">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <Button className="mt-4">Verify Code</Button>
          <p className="text-center">
            You have not received the email?{" "}
            <Link href={""} className="text-primary underline">
              Resend
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
