import { cn } from "@/lib/utils";
import React from "react";

const H1 = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl xl:text-6xl", className)}>{children}</h1>;
};

export default H1;
