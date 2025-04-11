import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartState {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
}

// const getCartFromLS = (): Product[] => JSON.parse(localStorage.getItem("cart") || "[]");
const setCartToLS = (data: Product[]) => localStorage.setItem("cart", JSON.stringify(data));

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            cart: [],

            addToCart: (product) =>
                set((state) => {
                    setCartToLS([...state.cart, product]);
                    return { cart: [...state.cart, product] };
                }),

            removeFromCart: (product) =>
                set((state) => {
                    setCartToLS(state.cart.filter((p) => p.id !== product.id));
                    return { cart: state.cart.filter((p) => p.id !== product.id) };
                }),
        }),
        {
            name: "cart",
            storage: typeof window !== "undefined" ? createJSONStorage(() => localStorage) : undefined,
        }
    )
);
