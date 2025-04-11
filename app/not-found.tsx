import H1 from "@/components/shared/headers/h1";
import H2 from "@/components/shared/headers/h2";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
    return (
        <div className="border h-screen flex flex-col gap-4 justify-center items-center">
            <H1 className="font-bold text-green-500 !text-9xl">404</H1>
            <H2>Page not found</H2>
            <Link href="/products" className={cn(buttonVariants({ variant: "outline" }), "mt-4 w-40")}>
                Go to Products
            </Link>
        </div>
    );
};

export default NotFoundPage;
