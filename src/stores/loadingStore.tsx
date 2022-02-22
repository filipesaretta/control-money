import create from "zustand";

export const loadingStore = create((set, get) => ({
  isVisible: false,
}));
