"use client";

import { useAuth } from "@/components/organisms/Auth/AuthProvider";
import {
  SigninForm,
  SigninFormFieldsValue,
} from "@/components/organisms/Auth/SigninForm";
import Link from "next/link";

export const Signin = () => {
  const { login } = useAuth();

  const onSubmit = async (data: SigninFormFieldsValue) => {
    login(data);
  };
  return (
    <>
      <h1>Signin</h1>
      <SigninForm onSubmit={onSubmit} />
      <Link href="/auth/signup">Signup</Link>
    </>
  );
};
