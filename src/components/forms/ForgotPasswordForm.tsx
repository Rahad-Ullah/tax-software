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
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email("Invalid email."),
});

const ForgotPasswordForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await myFetch("/auth/forgot-password", {
        method: "POST",
        body: values,
      });
      if (res?.success) {
        toast.success(res.message || "OTP sent successful");
        router.push(`/verify-otp?email=${values.email}`);
      } else {
        toast.error(res.message || "OTP sent failed");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section>
      <h1 className="text-xl font-medium mb-5">Edit Profile</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="mt-4">
            Send a code
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default ForgotPasswordForm;
