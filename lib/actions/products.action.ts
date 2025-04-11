"use server";

export const getProducts = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/products");
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};

export const getProduct = async ({ id }: { id: string }) => {
    try {
        const res = await fetch(`http://localhost:3000/api/products/${id}`);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};
