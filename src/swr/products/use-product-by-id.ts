import { API_ROUTES } from "@/config/api";
import { fetchApi } from "@/helpers/fetch-api";
import { getProductById } from "@/services/products/get-product-by-id";
import { Product } from "@/types/products";
import useSWR from "swr";

const fetcher = async (key: string): ReturnType<typeof getProductById> => {
  const result = await fetchApi<{ product: Product }>(key, {
    credentials: "include",
  });

  return {
    ...result,
    data: result.data?.product,
  };
};

export const useProductById = (id: Product["id"]) => {
  const result = useSWR(API_ROUTES.products.byId(id), fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
  });

  return {
    ...result,
    data: result.data?.data,
    error: result.error ?? (result.data?.isError ? "Something went wrong" : ""),
  };
};
