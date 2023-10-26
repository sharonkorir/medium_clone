import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set, get) => ({
      currentUser: null,
      setCurrentUser: (currentUser) => set({ currentUser }),
      //clear user to logout
      logout: () =>
        set(() => {
          return {
            currentUser: null,
          };
        }),
    }),
    { name: "user-storage" }
  )
);
