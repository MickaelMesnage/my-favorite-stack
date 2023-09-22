import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

export const signupFormZodSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export type SignupFormFieldsValue = z.infer<typeof signupFormZodSchema>;

export type SignupFormProps = {
  onSubmit: (data: SignupFormFieldsValue) => Promise<void>;
};

export const SignupForm = ({ onSubmit }: SignupFormProps) => {
  const methods = useForm<SignupFormFieldsValue>({
    resolver: zodResolver(signupFormZodSchema),
  });

  const { handleSubmit, register } = methods;

  return (
    <>
      <h1>Signup</h1>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Email
            <input type="text" {...register("email")} />
          </label>
          <label>
            Password
            <input type="password" {...register("password")} />
          </label>
          <button type="submit">Signup</button>
        </form>
      </FormProvider>
    </>
  );
};
