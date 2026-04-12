import { z } from "zod";

export const appointmentSchema = z.object({
  patientName: z.string().min(2, "Name must be at least 2 characters").max(100),
  age: z.coerce.number().min(1, "Age must be at least 1").max(120, "Age must be under 120"),
  gender: z.enum(["MALE", "FEMALE", "OTHER"]),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number, e.g. +91XXXXXXXXXX"),
  email: z.string().email("Please enter a valid email address"),
  complaint: z.string().min(10, "Please provide more details (min 10 characters)").max(500, "Maximum 500 characters allowed"),
  preferredDate: z.coerce.date().min(new Date(new Date().setHours(0, 0, 0, 0)), "Date cannot be in the past"),
  timeSlot: z.string().min(1, "Please select a time slot"),
  consultationType: z.enum(["IN_CLINIC", "ONLINE"]),
  source: z.string().optional()
});

export type AppointmentFormValues = z.infer<typeof appointmentSchema>;
