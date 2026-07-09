import { API_ROUTES } from "@/config/api";
import { fetchApi } from "@/helpers/fetch-api";

export const requestLogout = async () => {
  return fetchApi<unknown>(API_ROUTES.auth.logout, {
    method: "DELETE",
    credentials: "include",
    skipResponseBody: true,
  });
};
