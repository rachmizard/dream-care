import { useCartStore } from "@/stores";

export const useAddCart = () => useCartStore((store) => store.addCart);
export const useRemoveCart = () => useCartStore((store) => store.removeCart);
export const useClearCart = () => useCartStore((store) => store.clearCart);

export const useGetCarts = () => useCartStore((store) => store.carts);
export const useGetIsCartEmpty = () => {
	const carts = useGetCarts();
	return carts.length === 0;
};
