"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "../ui/button";
import { myFetch } from "@/utils/myFetch";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const formSchema = z.object({
  oneTimeCode: z.string().min(1, { message: "OTP is required" }),
});

const OtpVerifyForm = () => {
  const router = useRouter();
  const email = useSearchParams().get("email") as string;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      oneTimeCode: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await myFetch("/auth/verify-email", {
        method: "POST",
        body: { oneTimeCode: Number(values?.oneTimeCode), email },
      });
      if (res?.success) {
        toast.success(res.message || "OTP sent successful");
        if (res.data) {
          router.push(`/reset-password?auth=${res.data}`);
        } else {
          router.push("/login");
        }
      } else {
        toast.error(res.message || "OTP sent failed");
        console.error(res.error);
      }
    } catch (error) {
      console.error(error);
    }
  }

  // handle resend otp
  async function handleResendOtp() {
    try {
      const res = await myFetch("/auth/forgot-password", {
        method: "POST",
        body: { email },
      });
      if (res?.success) {
        toast.success(res.message || "OTP sent successful");
      } else {
        toast.error(res.message || "OTP sent failed");
        console.error(res.error);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-3">
          <FormField
            control={form.control}
            name="oneTimeCode"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex justify-center">
                    <InputOTP maxLength={4} {...field}>
                      <InputOTPGroup className="flex justify-center">
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="mt-4">
            Verify Code
          </Button>
        </form>
      </Form>
      <p className="text-center mt-4">
        You have not received the email?{" "}
        <Link
          onClick={handleResendOtp}
          href={""}
          className="text-primary underline"
        >
          Resend
        </Link>
      </p>
    </section>
  );
};

export default OtpVerifyForm;
