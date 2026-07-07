import { API_ROUTES } from "@/constants/api";
import { createSWRFetcher } from "@/helpers/create-swr-fetcher";
import { Product } from "@/types/products";
import useSWR from "swr";

const fetcher = createSWRFetcher<{ product: Product }>();

export const useProductById = (id: Product["id"]) => {
  const result = useSWR(API_ROUTES.products.byId(id), fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
  });

  return {
    ...result,
    data: result.data?.product,
  };
};
