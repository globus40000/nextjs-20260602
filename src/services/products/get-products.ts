import { API_ROUTES } from "@/config/api";
import { fetchApi } from "@/helpers/fetch-api";
import { withParams } from "@/helpers/with-params";
import { type Product } from "@/types/products";
import { cookies } from "next/headers";

type Params = {
  page?: number;
  limit?: number;
};

export const getProducts = async (params: Params = {}) => {
  const cookiesStore = await cookies();

  return fetchApi<Product[]>(withParams(API_ROUTES.products.list, params), {
    headers: {
      Cookie: cookiesStore.toString(),
    },
  });
};
