import LoginForm from "@/components/forms/LoginForm";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
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
            Login Your Account
          </h1>
          <p className="text-muted-foreground">
            Please enter your information to login your account
          </p>
        </section>
        <section className="grid gap-4 my-8">
          <LoginForm />

          <p className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href={"/sign-up"} className="text-primary underline">
              Create an account
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
};

export default LoginPage;
