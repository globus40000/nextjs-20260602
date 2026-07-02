import { BASE_API_URL } from "@/constants/api";
import { fetchApi } from "@/helpers/fetch-api";
import { Brand } from "@/types/products";

export const getBrands = async () => {
  return fetchApi<Brand[]>(`${BASE_API_URL}/brands`);
};
