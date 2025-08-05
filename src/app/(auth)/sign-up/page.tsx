import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="py-16 px-8 max-w-xl mx-auto">
      <section className="flex flex-col items-center text-center gap-2">
        <h1 className="text-3xl font-semibold text-muted">
          Create Your Account
        </h1>
        <p className="text-muted-foreground">
          Please enter your information to create your account
        </p>
      </section>
      <section className="grid gap-4 my-8">
        <div className="grid gap-2">
          <Label>Full Name</Label>
          <Input type="text" placeholder="Enter Your Full Name" />
        </div>
        <div className="grid gap-2">
          <Label>Email</Label>
          <Input type="email" placeholder="Enter Your Email" />
        </div>
        <div className="grid gap-2">
          <Label>Contact Number</Label>
          <Input type="text" placeholder="Enter Your Contact Number" />
        </div>
        <div className="grid gap-2">
          <Label>Password</Label>
          <Input type="password" placeholder="Enter Your Password" />
        </div>
        <Button className="mt-4">Sign Up</Button>
        <p className="text-center">
          Already have an account?{" "}
          <Link href={"/login"} className="text-primary underline">
            Sign in
          </Link>
        </p>
      </section>
    </div>
  );
};

export default SignUpPage;
