import { BASE_API_URL } from "@/constants/api";
import { fetchApi } from "@/helpers/fetch-api";

type Params = {
  login: string;
  password: string;
};

export const requestLogin = async (params: Params) => {
  return fetchApi<unknown>(`${BASE_API_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify(params),
    headers: { "Content-Type": "application/json" },
    skipResponseBody: true,
  });
};
