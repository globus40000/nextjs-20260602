"use server";

import { addProductToFavorite } from "@/services/products/add-product-to-favorite";
import { deleteProductFromFavorite } from "@/services/products/delete-product-from-favorite";
import { Product } from "@/types/products";
import { revalidatePath } from "next/cache";

export const handleFavoriteAction = async (
  product: Product,
): Promise<{ isError: boolean }> => {
  const { id, userData } = product;

  if (!userData) {
    return { isError: true };
  }

  const { isError } = userData.isFavorite
    ? await deleteProductFromFavorite(id)
    : await addProductToFavorite(id);

  revalidatePath("/");
  revalidatePath("/products");
  revalidatePath(`/product/${id}`);
  revalidatePath("/products/top-10");

  return { isError };
};
