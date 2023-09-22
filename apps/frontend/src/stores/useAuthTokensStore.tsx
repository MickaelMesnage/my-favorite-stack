import { create } from "zustand";

export type AuthTokensState = {
  accessToken: string | null;
  setAccessToken: (accessToken: string | null) => void;
  refreshToken: string | null;
  setRefreshToken: (accessToken: string | null) => void;
};

export const useStatisticsStore = create<AuthTokensState>((set) => ({
  accessToken: null,
  setAccessToken: (accessToken: string | null) =>
    set((state) => ({ ...state, accessToken })),
  refreshToken: null,
  setRefreshToken: (refreshToken: string | null) =>
    set((state) => ({ ...state, refreshToken })),
}));
