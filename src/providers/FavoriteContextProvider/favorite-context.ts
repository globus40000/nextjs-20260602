"use client";

import { Product } from "@/types/products";
import { createContext } from "react";

export type FavoriteContextValue = {
  isFavoriteMap: Record<Product["id"], boolean>;
  setIsFavorite: (productId: Product["id"], isFavorite: boolean) => void;
};

export const FavoriteContext = createContext<FavoriteContextValue>({
  isFavoriteMap: {},
  setIsFavorite: () => {
    console.warn("Cannot set favorite");
  },
});
