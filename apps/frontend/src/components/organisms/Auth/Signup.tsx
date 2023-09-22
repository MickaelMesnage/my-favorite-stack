"use client";

import {
  SignupForm,
  SignupFormFieldsValue,
} from "@/components/organisms/Auth/SignupForm";
import { useSignup } from "@/components/organisms/Auth/useSignup";

export const Signup = () => {
  const signup = useSignup();
  const onSubmit = async (data: SignupFormFieldsValue) => {
    console.log({ data });
    signup(data);
  };
  return <SignupForm onSubmit={onSubmit} />;
};
