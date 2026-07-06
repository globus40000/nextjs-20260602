import { FavoriteContext } from "@/providers/FavoriteContextProvider/favorite-context";
import { Product } from "@/types/products";
import { useContext, useEffect } from "react";

export const useHydrateFavorite = (product: Product) => {
  const { setIsFavorite } = useContext(FavoriteContext);

  useEffect(() => {
    const { id, userData } = product;

    if (!userData) {
      return;
    }

    const { isFavorite } = userData;

    setIsFavorite(id, isFavorite);
  }, [product, setIsFavorite]);
};
