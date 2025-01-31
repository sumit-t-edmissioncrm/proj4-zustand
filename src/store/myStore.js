import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  listOfProducts: [],

  actions: {
    increaseCount: () =>
      set((state) => ({
        count: state.count + 1,
      })),
    decreaseCount: () =>
      set((state) =>
        state.count > 0 ? { count: state.count - 1 } : { count: 0 }
      ),

    fetchListOfProducts: async () => {
      const apires = await fetch("https://dummyjson.com/products");
      const res = await apires.json();
      set({
        listOfProducts: res?.products,
      });
    },
  },
}));

export const useActions = () => useStore((state) => state.actions);

export default useStore;
