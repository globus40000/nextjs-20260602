import { API_ROUTES } from "@/config/api";
import { fetchApi } from "@/helpers/fetch-api";
import { Product } from "@/types/products";

export const deleteProductFromFavorite = async (id: Product["id"]) => {
  return fetchApi<unknown>(API_ROUTES.products.favorite(id), {
    method: "DELETE",
    credentials: "include",
    skipResponseBody: true,
  });
};
