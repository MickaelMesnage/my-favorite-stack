import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useEffect, useMemo } from "react";

type TokenPayload = {
  exp: number;
};

function jwtDecode(token: string) {
  const [header, payload] = token.split(".");

  return {
    header: JSON.parse(atob(header)),
    payload: JSON.parse(atob(payload)),
  };
}

export const useToken = (key: string) => {
  const [token, setToken] = useLocalStorage<string | undefined>(key);

  const payload = useMemo<TokenPayload | undefined>(
    () => (token ? jwtDecode(token).payload : undefined),
    [token]
  );

  const expiry = payload ? payload.exp * 1000 : undefined;

  // Clear token & payload when expired
  useEffect(() => {
    if (!expiry) return;
    const timeout = setTimeout(() => setToken(undefined), expiry - Date.now());
    return () => clearTimeout(timeout);
  }, [expiry, setToken]);

  // Also check for expired token at render time; values from localStorage
  // might be outdated from a previous visit.
  const expired = (expiry ?? 0) < Date.now();

  return {
    token: expired ? undefined : token,
    setToken,
    payload: expired ? undefined : payload,
    expiry,
  };
};
