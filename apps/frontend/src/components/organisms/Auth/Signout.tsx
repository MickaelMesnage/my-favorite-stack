"use client";

import { Button } from "@/src/components/atoms/Button";
import { useAuth } from "@/src/components/organisms/Auth/AuthProvider";

export const Signout = () => {
  const { logout } = useAuth();

  return <Button onClick={logout}>Signout</Button>;
};
