import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address"),
  subject: z.string().trim().min(3, "Please add a short subject").max(150),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters")
    .max(3000),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
