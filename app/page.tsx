import H1 from "@/components/shared/headers/h1";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
    return (
        <div className="border h-screen flex flex-col gap-4 justify-center items-center">
            <H1>
                Welcome to <span className="font-bold text-green-500 italic">PRODUCTS</span>
            </H1>
            <Link href="/products" className={cn(buttonVariants({ variant: "outline" }), "mt-4 w-40")}>
                Go to Products
            </Link>
        </div>
    );
}
