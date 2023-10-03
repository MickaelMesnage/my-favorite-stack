import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { VStack } from "@/panda/jsx";
import { css } from "@/panda/css";
import { Input } from "@/src/components/atoms/Input";
import { Button } from "@/src/components/atoms/Button";

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
        <VStack width="full" gap={6}>
          <label className={css({ width: "full" })}>
            Email
            <Input type="text" {...register("email")} />
          </label>
          <label>
            Password
            <Input type="password" {...register("password")} />
          </label>
          <Button type="submit" size="fluid">
            Se connecter
          </Button>
        </VStack>
      </form>
    </FormProvider>
  );
};
