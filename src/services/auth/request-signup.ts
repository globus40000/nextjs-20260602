import { BASE_API_URL } from "@/constants/api";
import { fetchApi } from "@/helpers/fetch-api";

type Params = {
  login: string;
  password: string;
};

export const requestSignup = async (params: Params) => {
  return fetchApi<unknown>(`${BASE_API_URL}/auth/signup`, {
    method: "POST",
    body: JSON.stringify(params),
    headers: { "Content-Type": "application/json" },
    skipResponseBody: true,
  });
};
