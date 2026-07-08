import { API_ROUTES } from "@/constants/api";
import { createSWRFetcher } from "@/helpers/create-swr-fetcher";
import { getProductById } from "@/services/products/get-product-by-id";
import { Product } from "@/types/products";
import useSWR from "swr";

type FetcherData = { product: Product };
type ServiceData = Awaited<ReturnType<typeof getProductById>>;

const fetcher = createSWRFetcher<FetcherData>();

export const useProductById = (id: Product["id"]) => {
  const result = useSWR<FetcherData | ServiceData | undefined>(
    API_ROUTES.products.byId(id),
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
    },
  );

  let data;
  let error = result.error;

  if (result.data && "product" in result.data) {
    data = result.data.product;
  }
  if (result.data && "data" in result.data) {
    data = result.data.data;

    if (!error && result.data.isError) {
      error = "Something went wrong";
    }
  }

  return { ...result, data, error };
};
