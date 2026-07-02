import { BASE_API_URL } from "@/constants/api";
import { fetchApi } from "@/helpers/fetch-api";
import { type Product } from "@/types/products";

export const getProductById = async (id: Product["id"]) => {
  const result = await fetchApi<{ product: Product }>(
    `${BASE_API_URL}/product/${id}`,
  );

  return {
    ...result,
    data: result.data?.product,
  };
};
