import { NextResponse } from "next/server";
import products from "@/data/products.json";

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = products.find((product: Product) => product.id.toString() === id);

    return NextResponse.json(product);
}
