"use client";

import { useAuth } from "@/components/organisms/Auth/AuthProvider";

export const Signout = () => {
  const { logout } = useAuth();

  return <button onClick={logout}>Signout</button>;
};
