import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .min(8, "Enter a valid phone number")
    .max(20)
    .regex(/^[+\d][\d\s-]+$/, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email"),
  vehicleModel: z.string().min(2, "Tell us your vehicle model").max(80),
});

export type LeadFormValues = z.infer<typeof leadSchema>;

export const contactSchema = leadSchema.extend({
  message: z.string().max(600).optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
