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
import Link from "next/link";
import { myFetch } from "@/utils/myFetch";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const formSchema = z.object({
  email: z.string().email("Invalid email."),
  password: z.string().nonempty("Password is required."),
});

const LoginForm = () => {
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await myFetch("/auth/login", {
        method: "POST",
        body: values,
      });
      if (res?.success) {
        toast.success(res.message || "Login successful");
        Cookies.set("accessToken", res.data.accessToken);
        router.push("/dashboard/profile");
      } else {
        toast.error(res.message || "Login failed");
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

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="flex items-center relative">
                    <Input
                      type={isPasswordVisible ? "text" : "password"}
                      placeholder="Enter Your Password"
                      {...field}
                    />
                    <span
                      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                      className="absolute right-4 text-muted-foreground cursor-pointer"
                    >
                      {isPasswordVisible ? <EyeOff /> : <Eye />}
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Link
            href={"/forgot-password"}
            className="text-primary underline text-sm text-end"
          >
            Forget Password?
          </Link>

          <Button type="submit" className="mt-4">
            Sign In
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default LoginForm;
