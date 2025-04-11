import { buttonVariants } from "@/components/ui/button";
import { getProducts } from "@/lib/actions/products.action";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ProductItem from "./product-item";

const ProductsList = async ({ viewTerm }: { viewTerm: string }) => {
    const products = await getProducts();
    const slicedProducts = products?.slice(0, viewTerm === "all" ? products.length : 3);

    return (
        <div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6 mt-4">
                {slicedProducts.map((product: Product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
            <div className="text-center">
                <Link href={viewTerm === "all" ? "/products" : "/products?view=all"} className={cn(buttonVariants({ variant: "outline" }), "w-40")}>
                    {viewTerm === "all" ? "Show less" : "Show more"}
                </Link>
            </div>
        </div>
    );
};

export default ProductsList;
