import { handleFavoriteAction } from "@/server-actions/handle-favorite-action";
import { Product } from "@/types/products";
import { useCallback, useOptimistic, useTransition } from "react";

export const useIsFavorite = (product: Product) => {
  const [isFavorite, setIsFavorite] = useOptimistic(
    product.userData?.isFavorite ?? false,
    (isFavorite) => !isFavorite,
  );
  const [isPending, startTransition] = useTransition();

  const handleClick = useCallback(() => {
    startTransition(async () => {
      setIsFavorite(!isFavorite);

      const { isError } = await handleFavoriteAction(product);

      if (isError) {
        alert(
          isFavorite
            ? "Не удалось удалить из избранного"
            : "Не удалось добавить в избранное",
        );
        return;
      }
    });
  }, [isFavorite, product, setIsFavorite]);

  return { isFavorite, handleClick, isPending };
};
