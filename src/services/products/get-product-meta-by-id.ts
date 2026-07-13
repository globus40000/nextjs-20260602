import { API_ROUTES } from "@/config/api";
import { fetchApi } from "@/helpers/fetch-api";
import { type Product, ProductMeta } from "@/types/products";

export const getProductMetaById = async (id: Product["id"]) => {
  const result = await fetchApi<{ product: ProductMeta }>(
    API_ROUTES.products.metaById(id),
  );

  return {
    ...result,
    data: result.data?.product,
  };
};
