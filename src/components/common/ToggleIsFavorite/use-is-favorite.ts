import { FavoriteContext } from "@/providers/FavoriteContextProvider/favorite-context";
import { useIsFavoriteFor } from "@/providers/FavoriteContextProvider/use-is-favorite-for";
import { addProductToFavorite } from "@/services/products/add-product-to-favorite";
import { deleteProductFromFavorite } from "@/services/products/delete-product-from-favorite";
import { Product } from "@/types/products";
import { useCallback, useContext, useState } from "react";

const handleFavorite = async (
  id: Product["id"],
  isFavorite: boolean,
): Promise<{ isError: boolean }> => {
  const { isError } = isFavorite
    ? await deleteProductFromFavorite(id)
    : await addProductToFavorite(id);

  return { isError };
};

export const useIsFavorite = (product: Product) => {
  const isFavorite = useIsFavoriteFor(product);
  const { setIsFavorite } = useContext(FavoriteContext);
  const [isPending, setIsPending] = useState(false);

  const handleClick = useCallback(async () => {
    const { id } = product;

    setIsFavorite(id, !isFavorite);
    setIsPending(true);

    const { isError } = await handleFavorite(id, isFavorite);

    setIsPending(false);

    if (isError) {
      alert(
        isFavorite
          ? "Не удалось удалить из избранного"
          : "Не удалось добавить в избранное",
      );
      setIsFavorite(id, isFavorite);
    }
  }, [isFavorite, product, setIsFavorite]);

  return { isFavorite, handleClick, isPending };
};
