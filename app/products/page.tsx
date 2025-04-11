import H2 from "@/components/shared/headers/h2";
import ProductsList from "./_components/products-list";

const ProductsPage = async ({ searchParams }: { searchParams: Promise<{ view: "all" }> }) => {
    const { view: viewTerm } = await searchParams;

    return (
        <div className="container p-4 px-20 mx-auto pb-20">
            <div className="my-4">
                <H2 className="text-center">Featured Phones</H2>
            </div>

            <ProductsList viewTerm={viewTerm} />
        </div>
    );
};

export default ProductsPage;
