import { BASE_API_URL } from "@/constants/api";
import { Response } from "@/types/api";
import { type Product, ProductMeta } from "@/types/products";

export const getProductMetaById = async (
  id: Product["id"],
): Response<ProductMeta> => {
  const result = await fetch(`${BASE_API_URL}/meta/product/${id}`);

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }
  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const { product } = await result.json();

  return { isError: false, data: product };
};
