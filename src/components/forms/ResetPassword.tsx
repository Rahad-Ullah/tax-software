"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "../ui/button";
import { myFetch } from "@/utils/myFetch";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const formSchema = z.object({
  newPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

const ResetPasswordForm = () => {
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const router = useRouter();
  const resetToken = useSearchParams().get("auth") as string;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await myFetch("/auth/reset-password", {
        method: "POST",
        body: values,
        token: resetToken,
      });
      if (res?.success) {
        toast.success(res.message || "OTP sent successful");
        router.push(`/login`);
      } else {
        toast.error(res.message || "OTP sent failed");
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
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <div className="flex items-center relative">
                    <Input
                      type={isNewPasswordVisible ? "text" : "password"}
                      placeholder="Enter Your New Password"
                      {...field}
                    />
                    <span
                      onClick={() =>
                        setIsNewPasswordVisible(!isNewPasswordVisible)
                      }
                      className="absolute right-4 text-muted-foreground cursor-pointer"
                    >
                      {isNewPasswordVisible ? <EyeOff /> : <Eye />}
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <div className="flex items-center relative">
                    <Input
                      type={isConfirmPasswordVisible ? "text" : "password"}
                      placeholder="Enter Your Confirm Password"
                      {...field}
                    />
                    <span
                      onClick={() =>
                        setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                      }
                      className="absolute right-4 text-muted-foreground cursor-pointer"
                    >
                      {isConfirmPasswordVisible ? <EyeOff /> : <Eye />}
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="mt-4">
            Update Password
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default ResetPasswordForm;
