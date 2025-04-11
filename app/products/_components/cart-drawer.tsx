"use client";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useCartStore } from "@/lib/zustand/cart.store";
import { ShoppingCart } from "lucide-react";
import ProductItemForCart from "./product-item-for-cart";

const CartDrawer = () => {
    const cart = useCartStore((state) => state.cart);

    return (
        <div>
            <Sheet>
                <SheetTrigger className="border border-white/70 hover:border-white group cursor-pointer rounded-full p-2 fixed bottom-4 right-4">
                    <ShoppingCart className="w-6 h-6 text-white/70 group-hover:text-white" />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Your Cart</SheetTitle>
                        <SheetDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dolore!</SheetDescription>
                        {!cart.length ? (
                            <SheetDescription className="text-center mt-4">Your cart is empty</SheetDescription>
                        ) : (
                            cart.map((product) => <ProductItemForCart key={product.id} product={product} />)
                        )}
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default CartDrawer;
