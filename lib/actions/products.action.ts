"use server";

export const getProducts = async () => {
    try {
        const res = await fetch("https://products-e-commerce.vercel.app/api/products");
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};

export const getProduct = async ({ id }: { id: string }) => {
    try {
        const res = await fetch(`https://products-e-commerce.vercel.app/api/products/${id}`);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};
