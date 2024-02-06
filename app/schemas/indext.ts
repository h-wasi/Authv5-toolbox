import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email address is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "Email address is required" }),
  password: z.string().min(8, { message: "Minimum 8 characters required" }),
  name: z.string().min(1, { message: "Name is required" }),
});
