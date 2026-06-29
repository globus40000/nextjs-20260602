import { BASE_API_URL } from "@/constants/api";
import { Response } from "@/types/api";
import { type Product } from "@/types/products";

export const getProducts = async (): Response<Product[]> => {
  const result = await fetch(`${BASE_API_URL}/products`);

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }
  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const products = await result.json();

  return { isError: false, data: products };
};
