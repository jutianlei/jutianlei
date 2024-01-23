import { create } from "zustand";

export const useBearStore = create((set) => ({
  musicId: 0,
  increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
