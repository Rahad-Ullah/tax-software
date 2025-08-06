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
import { useForm } from "react-hook-form";

const ProfileDetails = ({ user }: { user?: any }) => {
  const form = useForm({
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      dob: new Date(user?.dob).toLocaleDateString() || "",
      accountNo: user?.accountNo || "",
      transitNo: user?.transitNo || "",
      institutionNo: user?.institutionNo || "",
      balance: user?.balance || undefined,
      homeAddress: user?.homeAddress || "",
      bankAddress: user?.bankAddress || "",
      taxNo: user?.taxNo || "",
    },
  });

  return (
    <div>
      <Form {...form}>
        <form className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Your Full Name"
                    {...field}
                    readOnly
                  />
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
                  <Input placeholder="Enter Your Email" {...field} readOnly />
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
                  <Input placeholder="MM/DD/YYYY" {...field} readOnly />
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
                  <Input placeholder="1234" {...field} readOnly />
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
                  <Input placeholder="1234" {...field} readOnly />
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
                  <Input placeholder="1234" {...field} readOnly />
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
                  <Input placeholder="$0.00" {...field} readOnly />
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
                  <Input
                    placeholder="Enter Your Home Address"
                    {...field}
                    readOnly
                  />
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
                  <Input
                    placeholder="Enter Your Bank Address"
                    {...field}
                    readOnly
                  />
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
                  <Input
                    placeholder="Enter Your Tax Number"
                    {...field}
                    readOnly
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default ProfileDetails;
