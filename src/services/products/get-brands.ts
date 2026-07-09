import { API_ROUTES } from "@/config/api";
import { fetchApi } from "@/helpers/fetch-api";
import { Brand } from "@/types/products";

export const getBrands = async () => {
  return fetchApi<Brand[]>(API_ROUTES.products.brands);
};
