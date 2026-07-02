import { BASE_API_URL } from "@/constants/api";
import { fetchApi } from "@/helpers/fetch-api";
import { type Product } from "@/types/products";

export const getProductsTop10 = async () => {
  return fetchApi<Product[]>(`${BASE_API_URL}/top-10`, {
    next: { tags: ["top-10"] },
  });
};
