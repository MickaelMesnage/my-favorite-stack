import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "@/src/components/atoms/Input";
import { css } from "@/panda/css";
import { Button } from "@/src/components/atoms/Button";

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
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={css({ width: "full" })}>
          Email
          <Input type="text" {...register("email")} />
        </label>
        <label>
          Password
          <Input type="password" {...register("password")} />
        </label>
        <Button type="submit">Signup</Button>
      </form>
    </FormProvider>
  );
};
