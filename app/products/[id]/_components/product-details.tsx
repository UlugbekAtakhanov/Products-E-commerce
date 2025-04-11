import { buttonVariants } from "@/components/ui/button";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { getProduct } from "@/lib/actions/products.action";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "../../_components/add-to-cart-button";

const ProductDetails = async ({ id }: { id: string }) => {
    const product = await getProduct({ id });

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="p-4 flex flex-col md:flex-row justify-center items-center">
                <Image src={product.image} width={1000} height={1000} className="max-w-[300px] aspect-[3/4] object-cover" alt="img" />

                <div className="p-4 flex flex-col gap-4 justify-between bg-background/50 hover:bg-background/80 transition-all backdrop-blur">
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, dolorum!</CardDescription>
                    <CardDescription className="text-green-500">${product.price}</CardDescription>

                    <AddToCartButton product={product} />

                    <Link href="/products" className={cn(buttonVariants({ variant: "default" }))}>
                        Back to Products
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
