import { BASE_API_URL } from "@/constants/api";
import { fetchApi } from "@/helpers/fetch-api";
import { Product } from "@/types/products";
import { cookies } from "next/headers";

export const addProductToFavorite = async (id: Product["id"]) => {
  const cookiesStore = await cookies();

  return fetchApi<unknown>(`${BASE_API_URL}/product/${id}/favorite`, {
    method: "POST",
    headers: {
      Cookie: cookiesStore.toString(),
    },
    skipResponseBody: true,
  });
};
