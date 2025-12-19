import * as z from "zod";

// register schema
export const RegisterInputSchema = z.object({
  username: z.string().min(3, "input valid email username "),
  email: z.email("input valid email address"),
  password: z.string().min(5, "input valid email password"),
});

// login schema
export const LoginInputSchema = z.object({
  email: z.email("input valid email address"),
  password: z.string(),
});
