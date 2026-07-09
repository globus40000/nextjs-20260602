import { FavoriteContextValue } from "@/providers/FavoriteContextProvider/favorite-context";
import { Product } from "@/types/products";
import { useCallback, useState } from "react";

export const useFavorite = () => {
  const [isFavoriteMap, setIsFavoriteMap] = useState<
    FavoriteContextValue["isFavoriteMap"]
  >({});

  const setIsFavorite = useCallback(
    (productId: Product["id"], isFavorite: boolean) => {
      setIsFavoriteMap((prevMap) => {
        if (prevMap[productId] === isFavorite) {
          return prevMap;
        }
        return {
          ...prevMap,
          [productId]: isFavorite,
        };
      });
    },
    [],
  );

  return { isFavoriteMap, setIsFavorite };
};
