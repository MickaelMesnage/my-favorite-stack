"use client";

import { useToken } from "@/components/organisms/Auth/useToken";
import { postAuthApi } from "@/components/organisms/Auth/utils";
import { useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";

const EXPIRY_LEEWAY = 30 * 1000;

type AuthContextType = {
  accessToken?: string;
  isLoggedIn: boolean;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderProps = React.PropsWithChildren;
export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();

  const {
    token: accessToken,
    expiry: accessTokenExpiry,
    setToken: setAccessToken,
  } = useToken("accessToken");

  const { token: refreshToken, setToken: setRefreshToken } =
    useToken("refreshToken");

  const updateTokens = useCallback(
    (data: { accessToken?: string; refreshToken?: string }) => {
      setAccessToken(data.accessToken);
      setRefreshToken(data.refreshToken);
    },
    [setAccessToken, setRefreshToken]
  );

  useEffect(() => {
    if (accessTokenExpiry == null) return;
    if (!refreshToken) return;

    const timeout = setTimeout(() => {
      postAuthApi("refresh", {
        headers: {
          authorization: refreshToken ? `Bearer ${refreshToken}` : "",
        },
      })
        .then((res) => res.json())
        .then(({ access_token: accessToken, refresh_token: refreshToken }) =>
          updateTokens({ accessToken, refreshToken })
        );
    }, accessTokenExpiry - Date.now() - EXPIRY_LEEWAY);

    return () => clearTimeout(timeout);
  }, [accessTokenExpiry, refreshToken, updateTokens]);

  const login = useCallback(
    (credentials: { email: string; password: string }) =>
      postAuthApi("local/signin", { body: credentials })
        .then((res) => res.json())
        .then(({ access_token: accessToken, refresh_token: refreshToken }) => {
          updateTokens({ accessToken, refreshToken });
          router.push("/");
        }),
    [updateTokens, router]
  );

  const logout = useCallback(
    () =>
      postAuthApi("logout", {
        headers: {
          authorization: accessToken ? `Bearer ${accessToken}` : "",
        },
      }).then(() => updateTokens({})),
    [refreshToken, updateTokens]
  );

  return (
    <AuthContext.Provider
      value={useMemo(
        () => ({
          accessToken,
          isLoggedIn: accessToken != null,
          login,
          logout,
        }),
        [accessToken, login, logout]
      )}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
