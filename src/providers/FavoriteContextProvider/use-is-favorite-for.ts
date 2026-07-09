import { FavoriteContext } from "@/providers/FavoriteContextProvider/favorite-context";
import { Product } from "@/types/products";
import { useContext } from "react";

export const useIsFavoriteFor = (product: Product) => {
  const { isFavoriteMap } = useContext(FavoriteContext);
  const { id, userData } = product;

  return isFavoriteMap[id] ?? (userData ? userData.isFavorite : false);
};
