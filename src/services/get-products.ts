import { BASE_API_URL } from "@/constants/api";
import { fetchApi } from "@/helpers/fetch-api";
import { type Product } from "@/types/products";

type Params = {
  page?: number;
  limit?: number;
};

export const getProducts = async (params: Params = {}) => {
  const url = new URL(`${BASE_API_URL}/products`);

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      url.searchParams.append(key, String(value));
    }
  });

  return fetchApi<Product[]>(url);
};
