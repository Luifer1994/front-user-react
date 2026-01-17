import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      token: "",
      setToken: (token) => set({ token }),
      logout: () => set({ token: "" }),
    }),
    {
      name: "token",
    },
  ),
);

export default useAuthStore;
