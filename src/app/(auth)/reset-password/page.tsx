import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ResetPasswordPage = () => {
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="py-16 px-8 max-w-xl mx-auto">
        <section className="flex flex-col items-center text-center gap-2">
          <h1 className="text-3xl font-semibold text-muted">
            Set a New Password
          </h1>
          <p className="text-muted-foreground">
            Create a new password. Ensure it differs from previous ones for
            security
          </p>
        </section>
        <section className="grid gap-4 my-8">
          <div className="grid gap-2">
            <Label>New Password</Label>
            <Input type="password" placeholder="Enter Your New Password" />
          </div>
          <div className="grid gap-2">
            <Label>Confirm Password</Label>
            <Input type="password" placeholder="Enter Your Confirm Password" />
          </div>
          <Button className="mt-4">Update Password</Button>
        </section>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
