import { Suspense } from "react";
import ProductDetails from "./_components/product-details";

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    return (
        <div className="container px-20 mx-auto">
            <Suspense fallback={"loading..."}>
                <ProductDetails id={id} />
            </Suspense>
        </div>
    );
};

export default ProductPage;
