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
import { revalidateTags } from "@/utils/revalidateTags";

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .optional(),
  email: z.string().email("Invalid email.").optional(),
  dob: z.string().optional(),
  accountNo: z.string().optional(),
  transitNo: z.string().optional(),
  institutionNo: z.string().optional(),
  balance: z.string().optional(),
  homeAddress: z.string().optional(),
  bankAddress: z.string().optional(),
  taxNo: z.string().optional(),
});

const EditProfileForm = ({ user }: { user: any }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      dob: new Date(user.dob).toISOString().split("T")[0] || "",
      accountNo: user?.accountNo || "",
      transitNo: user?.transitNo || "",
      institutionNo: user?.institutionNo || "",
      balance: String(user?.balance) || "",
      homeAddress: user?.homeAddress || "",
      bankAddress: user?.bankAddress || "",
      taxNo: user?.taxNo || "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await myFetch("/users/profile", {
        method: "PATCH",
        body: { ...values, balance: Number(values.balance) },
      });
      if (res?.success) {
        toast.success(res.message || "Profile updated successfully");
        await revalidateTags(["Profile"]);
        location.reload();
      } else {
        toast.error(res.message || "Failed to update profile");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section>
      <h1 className="text-xl font-medium mb-5">Edit Profile</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Full Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
            name="dob"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of Birth (DOB)</FormLabel>
                <FormControl>
                  <Input type="date" placeholder="MM/DD/YYYY" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="accountNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Account Number</FormLabel>
                <FormControl>
                  <Input placeholder="1234" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="transitNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Transit Number</FormLabel>
                <FormControl>
                  <Input placeholder="1234" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="institutionNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Institution Number</FormLabel>
                <FormControl>
                  <Input placeholder="1234" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="balance"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Balance</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="$0.00" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="homeAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Home address</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Home Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bankAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bank address</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Bank Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="taxNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tax number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Tax Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="col-span-2 flex justify-end">
            <Button className="w-fit">Save & Update</Button>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default EditProfileForm;
