"use server";
import { z } from "zod";
import { LoginSchema, RegisterSchema } from "@/app/schemas/indext";
import bcrypt from "bcrypt";
import { db } from "../db";
import error from "next/error";
import { getUserByEmail } from "@/data/user";

export async function login(values: z.infer<typeof LoginSchema>) {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success)
    return {
      error: "invalid login",
    };
  return {
    success: "Email sent!!!",
  };
}
export async function register(values: z.infer<typeof RegisterSchema>) {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success)
    return {
      error: "invalid login",
    };
  const { email, name, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { error: "Email is already in use!" };
  }
  await db.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });
  // TODO: Send verification Token
  return {
    success: "User created !!!",
  };
}
