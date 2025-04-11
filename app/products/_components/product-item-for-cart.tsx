import { CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import AddToCartButton from "./add-to-cart-button";

const ProductItemForCart = ({ product }: { product: Product }) => {
    return (
        <div>
            <div className="p-4 relative flex gap-2">
                <Image src={product.image} width={1000} height={1000} className="w-20 aspect-[3/4] object-cover" alt="img" />
                <div className="flex flex-col gap-2 justify-between">
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, dolorum!</CardDescription>
                    <div className="flex justify-between items-center">
                        <CardDescription className="text-green-500">${product.price}</CardDescription>
                        <AddToCartButton product={product} size="xs" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItemForCart;
