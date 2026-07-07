import { API_ROUTES } from "@/constants/api";
import { fetchApi } from "@/helpers/fetch-api";

type Params = {
  login: string;
  password: string;
};

export const requestLogin = async (params: Params) => {
  return fetchApi<unknown>(API_ROUTES.auth.login, {
    method: "POST",
    body: JSON.stringify(params),
    headers: { "Content-Type": "application/json" },
    skipResponseBody: true,
  });
};
