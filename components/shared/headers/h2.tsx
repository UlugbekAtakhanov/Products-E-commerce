import { cn } from "@/lib/utils";
import React from "react";

const H2 = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    // return <h2 className={cn(`font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl`, className)}>{children}</h2>;
    // return <h2 className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)}>{children}</h2>;
    return <h2 className={cn("scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)}>{children}</h2>;
};

export default H2;
