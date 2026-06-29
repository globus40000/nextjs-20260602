import { BASE_API_URL } from "@/constants/api";
import { Response } from "@/types/api";
import { Brand } from "@/types/products";

export const getBrands = async (): Response<Brand[]> => {
  const result = await fetch(`${BASE_API_URL}/brands`);

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }
  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const brands = await result.json();

  return { isError: false, data: brands };
};
