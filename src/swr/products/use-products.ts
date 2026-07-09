import { API_ROUTES } from "@/config/api";
import { fetchApi } from "@/helpers/fetch-api";
import { withParams } from "@/helpers/with-params";
import { getProducts } from "@/services/products/get-products";
import { Product } from "@/types/products";
import useSWR from "swr";

const fetcher = async (key: string): ReturnType<typeof getProducts> => {
  return fetchApi<Product[]>(key, {
    credentials: "include",
  });
};

type Params = {
  page?: number;
  limit?: number;
};

export const useProducts = (params: Params = {}) => {
  const result = useSWR(withParams(API_ROUTES.products.list, params), fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
  });

  return {
    ...result,
    data: result.data?.data,
    error: result.error ?? (result.data?.isError ? "Something went wrong" : ""),
  };
};
