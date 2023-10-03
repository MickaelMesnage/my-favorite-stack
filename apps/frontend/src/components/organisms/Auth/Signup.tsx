"use client";

import {
  SignupForm,
  SignupFormFieldsValue,
} from "@/src/components/organisms/Auth/SignupForm";
import { useSignup } from "@/src/components/organisms/Auth/useSignup";
import Link from "next/link";

export const Signup = () => {
  const signup = useSignup();

  const onSubmit = async (data: SignupFormFieldsValue) => {
    signup(data);
  };
  return (
    <>
      <h1>Signup</h1>
      <SignupForm onSubmit={onSubmit} />
      <Link href="/auth/signin">Signin</Link>
    </>
  );
};
