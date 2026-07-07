import { API_ROUTES, BASE_API_URL } from "@/constants/api";
import { fetchApi } from "@/helpers/fetch-api";
import { type Product } from "@/types/products";
import { cookies } from "next/headers";

type Params = {
  page?: number;
  limit?: number;
};

export const getProducts = async (params: Params = {}) => {
  const url = new URL(API_ROUTES.products.list, BASE_API_URL);

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      url.searchParams.append(key, String(value));
    }
  });

  const cookiesStore = await cookies();

  return fetchApi<Product[]>(url, {
    headers: {
      Cookie: cookiesStore.toString(),
    },
  });
};
