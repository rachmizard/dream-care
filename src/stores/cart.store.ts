import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

import { ProductInterface } from "@/interfaces/product.interface";

type UseCartStoreActions = {
	addCart: (cart: ProductInterface) => void;
	removeCart: (index: number) => void;
	clearCart: () => void;
};

interface UseCartStore extends UseCartStoreActions {
	carts: ProductInterface[];
}

const persistedStore = persist<UseCartStore>(
	(set) => {
		return {
			carts: [],
			addCart: (cart: ProductInterface) => {
				set((state) => {
					return {
						...state,
						carts: [...state.carts, cart],
					};
				});
			},
			removeCart: (index: number) => {
				set((state) => {
					const newCarts = [...state.carts];
					newCarts.splice(index, 1);
					return {
						...state,
						carts: newCarts,
					};
				});
			},
			clearCart: () => {
				set((state) => {
					return {
						...state,
						carts: [],
					};
				});
			},
		};
	},
	{
		name: "cart-store",
	}
);

export const useCartStore = create(devtools(persistedStore));
