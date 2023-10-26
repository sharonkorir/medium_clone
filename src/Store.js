import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set, get) => ({
      currentEmail: null,
      setCurrentEmail: (currentEmail) => set({ currentEmail }),
      //clear user to logout
      logout: () =>
        set(() => {
          return {
            currentEmail: null,
          };
        }),
    }),
    { name: "user-storage" }
  )
);
