import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="py-16 px-8 max-w-xl mx-auto">
      <section className="flex flex-col items-center text-center gap-2">
        <h1 className="text-3xl font-semibold text-muted">
          Login Your Account
        </h1>
        <p className="text-muted-foreground">
          Please enter your information to login your account
        </p>
      </section>
      <section className="grid gap-4 my-8">
        <div className="grid gap-2">
          <Label>Email</Label>
          <Input type="email" placeholder="Enter Your Email" />
        </div>
        <div className="grid gap-2">
          <Label>Password</Label>
          <Input type="password" placeholder="Enter Your Password" />
          <Link
            href={"/forgot-password"}
            className="text-primary underline text-sm text-end"
          >
            Forget Password?
          </Link>
        </div>
        <Button className="mt-4">Sign In</Button>
        <p className="text-center">
          Don&apos;t have an account?{" "}
          <Link href={"/sign-up"} className="text-primary underline">
            Create an account
          </Link>
        </p>
      </section>
    </div>
  );
};

export default LoginPage;
