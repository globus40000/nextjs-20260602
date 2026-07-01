import { BASE_API_URL } from "@/constants/api";
import { fetchApi } from "@/helpers/fetch-api";
import { type Product, ProductMeta } from "@/types/products";

export const getProductMetaById = async (id: Product["id"]) => {
  const result = await fetchApi<{ product: ProductMeta }>(
    `${BASE_API_URL}/meta/product/${id}`,
  );

  return {
    ...result,
    data: result.data?.product,
  };
};
