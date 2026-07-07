import { API_ROUTES } from "@/constants/api";
import { fetchApi } from "@/helpers/fetch-api";
import { type Product } from "@/types/products";
import { cookies } from "next/headers";

export const getProductsTop10 = async () => {
  const cookiesStore = await cookies();

  return fetchApi<Product[]>(API_ROUTES.products.top10, {
    next: { tags: ["top-10"] },
    headers: {
      Cookie: cookiesStore.toString(),
    },
  });
};
