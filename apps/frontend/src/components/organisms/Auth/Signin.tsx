"use client";

import { HStack } from "@/panda/jsx";
import { CardBody } from "@/src/components/atoms/CardBody";
import { CardFooter } from "@/src/components/atoms/CardFooter";
import { CardHeader } from "@/src/components/atoms/CardHeader";
import { Card } from "@/src/components/molecules/Card";
import { useAuth } from "@/src/components/organisms/Auth/AuthProvider";
import {
  SigninForm,
  SigninFormFieldsValue,
} from "@/src/components/organisms/Auth/SigninForm";
import Link from "next/link";

export const Signin = () => {
  const { login } = useAuth();

  const onSubmit = async (data: SigninFormFieldsValue) => {
    login(data);
  };
  return (
    <Card width="md">
      <CardHeader label="Se connecter" />
      <CardBody>
        <SigninForm onSubmit={onSubmit} />
      </CardBody>
      <CardFooter>
        <HStack justifyContent="center" gap={2}>
          <span>Pas encore de compte ?</span>
          <Link href="/auth/signup">Créer un compte</Link>
        </HStack>
      </CardFooter>
    </Card>
  );
};
