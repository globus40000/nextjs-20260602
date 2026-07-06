import { BASE_API_URL } from "@/constants/api";
import { fetchApi } from "@/helpers/fetch-api";
import { type Product } from "@/types/products";
import { cookies } from "next/headers";

export const getProductById = async (id: Product["id"]) => {
  const cookiesStore = await cookies();

  const result = await fetchApi<{ product: Product }>(
    `${BASE_API_URL}/product/${id}`,
    {
      headers: {
        Cookie: cookiesStore.toString(),
      },
    },
  );

  return {
    ...result,
    data: result.data?.product,
  };
};
