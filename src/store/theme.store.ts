import { create } from "zustand";

type StoreTheme = {
  theme: "light" | "dark";
  toggleTheme: (newTheme: "light" | "dark") => void;
};

export const useStoreTheme = create<StoreTheme>()(set => ({
  theme: "dark",
  toggleTheme: newTheme => set({ theme: newTheme })
}));
