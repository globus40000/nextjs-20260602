import { BASE_API_URL } from "@/constants/api";
import { fetchApi } from "@/helpers/fetch-api";

export const requestLogout = async () => {
  return fetchApi<unknown>(`${BASE_API_URL}/auth/logout`, {
    method: "DELETE",
    credentials: "include",
    skipResponseBody: true,
  });
};
