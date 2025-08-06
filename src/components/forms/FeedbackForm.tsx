"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Star } from "lucide-react";

const formSchema = z.object({
  message: z.string().min(1, { message: "Message is required" }),
  rating: z
    .number()
    .min(1, "Please provide a rating")
    .max(5, "Maximum rating is 5"),
});

const FeedbackForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
      rating: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-8">
          {/* Rating */}
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rating</FormLabel>
                <FormControl>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className={`text-2xl ${
                          field.value >= star
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                        onClick={() => field.onChange(star)}
                      >
                        <Star size={32} />
                      </button>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter Your Message"
                    {...field}
                    className="min-h-36"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-fit ml-auto">
            Submit
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default FeedbackForm;
