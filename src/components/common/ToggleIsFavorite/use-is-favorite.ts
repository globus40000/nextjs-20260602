import { addProductToFavorite } from "@/services/products/add-product-to-favorite";
import { deleteProductFromFavorite } from "@/services/products/delete-product-from-favorite";
import { Product } from "@/types/products";
import { useCallback, useState, useTransition } from "react";

const handleFavorite = async (
  product: Product,
): Promise<{ isError: boolean }> => {
  const { id, userData } = product;

  if (!userData) {
    return { isError: true };
  }

  const { isError } = userData.isFavorite
    ? await deleteProductFromFavorite(id)
    : await addProductToFavorite(id);

  return { isError };
};

export const useIsFavorite = (product: Product) => {
  const [isFavorite, setIsFavorite] = useState(
    product.userData?.isFavorite ?? false,
  );
  const [isPending, startTransition] = useTransition();

  const handleClick = useCallback(() => {
    startTransition(async () => {
      const { isError } = await handleFavorite(product);

      if (isError) {
        alert(
          isFavorite
            ? "Не удалось удалить из избранного"
            : "Не удалось добавить в избранное",
        );
        return;
      }

      setIsFavorite(!isFavorite);
    });
  }, [isFavorite, product]);

  return { isFavorite, handleClick, isPending };
};
