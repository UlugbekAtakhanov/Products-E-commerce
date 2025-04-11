"use client";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/zustand/cart.store";
import { ShoppingBasket } from "lucide-react";

const AddToCartButton = ({ product, size }: { product: Product; size?: "default" | "xs" | "sm" | "lg" | "icon" | null | undefined }) => {
    const cart = useCartStore((state) => state.cart);
    const addToCart = useCartStore((state) => state.addToCart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    console.log(cart);

    const addToCartHandler = () => addToCart(product);

    const removeFromCartHandler = () => removeFromCart(product);

    return (
        <>
            {cart.find((item) => item.id === product.id) ? (
                <Button variant={"outline"} size={size} onClick={removeFromCartHandler}>
                    <ShoppingBasket className="w-4 h-4 mt-0.5" /> Remove from cart
                </Button>
            ) : (
                <Button variant={"outline"} size={size} onClick={addToCartHandler}>
                    <ShoppingBasket className="w-4 h-4 mt-0.5" /> Add to cart
                </Button>
            )}
        </>
    );
};

export default AddToCartButton;
