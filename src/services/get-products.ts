import { BASE_API_URL } from "@/constants/api";
import { Response } from "@/types/api";
import { type Product } from "@/types/products";

type Params = {
  page?: number;
  limit?: number;
};

export const getProducts = async (params: Params = {}): Response<Product[]> => {
  const url = new URL(`${BASE_API_URL}/products`);

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      url.searchParams.append(key, String(value));
    }
  });

  const result = await fetch(url);

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }
  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const products = await result.json();

  return { isError: false, data: products };
};
