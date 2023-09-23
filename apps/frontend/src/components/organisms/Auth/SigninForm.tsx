import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

export const signinFormZodSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export type SigninFormFieldsValue = z.infer<typeof signinFormZodSchema>;

export type SigninFormProps = {
  onSubmit: (data: SigninFormFieldsValue) => Promise<void>;
};

export const SigninForm = ({ onSubmit }: SigninFormProps) => {
  const methods = useForm<SigninFormFieldsValue>({
    resolver: zodResolver(signinFormZodSchema),
  });

  const { handleSubmit, register } = methods;

  return (
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
        <button type="submit">Signin</button>
      </form>
    </FormProvider>
  );
};
