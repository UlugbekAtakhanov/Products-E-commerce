import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./add-to-cart-button";

const ProductItem = ({ product }: { product: Product }) => {
    return (
        <div>
            <Card className="p-4 relative mb-[100px]">
                <Image src={product.image} width={1000} height={1000} className="w-full aspect-[3/4] object-cover" alt="img" />
                <Card className="absolute w-[85%] -bottom-[70px] right-0 p-4 flex flex-col gap-4 justify-between bg-background/50 hover:bg-background/80 transition-all group backdrop-blur">
                    <CardTitle className="group-hover:underline">
                        <Link href={`/products/${product.id}`}>{product.name}</Link>
                    </CardTitle>
                    <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, dolorum!</CardDescription>
                    <div className="flex justify-between items-center">
                        <CardDescription className="text-green-500">${product.price}</CardDescription>
                        <AddToCartButton product={product} size="xs" />
                    </div>
                </Card>
            </Card>
        </div>
    );
};

export default ProductItem;
