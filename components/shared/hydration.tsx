"use client"; // (a)

import { useCartStore } from "@/lib/zustand/cart.store";
import * as React from "react";

const Hydration = () => {
    React.useEffect(() => {
        useCartStore.persist.rehydrate();
    }, []);

    return null;
};

export default Hydration;
