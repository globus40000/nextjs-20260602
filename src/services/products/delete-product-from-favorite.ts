import { BASE_API_URL } from "@/constants/api";
import { fetchApi } from "@/helpers/fetch-api";
import { Product } from "@/types/products";

export const deleteProductFromFavorite = async (id: Product["id"]) => {
  return fetchApi(`${BASE_API_URL}/product/${id}/favorite`, {
    method: "DELETE",
    credentials: "include",
    skipResponseBody: true,
  });
};
