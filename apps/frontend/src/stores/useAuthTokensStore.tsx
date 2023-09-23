import { create } from "zustand";

export type AuthTokensState = {
  accessToken: string | null;
  // setAccessToken: (accessToken: string | null) => void;
  refreshToken: string | null;
  updateTokens: (
    accessToken: string | null,
    refreshToken: string | null
  ) => void;
  // setRefreshToken: (accessToken: string | null) => void;
};

export const useAuthTokensStore = create<AuthTokensState>((set) => ({
  accessToken: null,
  refreshToken: null,
  updateTokens: (accessToken, refreshToken) =>
    set((state) => ({
      ...state,
      accessToken,
      refreshToken,
    })),
  // setAccessToken: (accessToken: string | null) =>
  //   set((state) => ({ ...state, accessToken })),
  // refreshToken: null,
  // setRefreshToken: (refreshToken: string | null) =>
  //   set((state) => ({ ...state, refreshToken })),
}));

// TODO REMOVE THIS
