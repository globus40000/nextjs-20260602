import { BASE_API_URL } from "@/constants/api";
import { ApiResponse } from "@/types/api";

export async function fetchApi<T>(
  url: string | URL,
  options?: RequestInit & {
    skipResponseBody?: boolean;
    includeResponse?: boolean;
  },
): ApiResponse<T> {
  const targetUrl =
    typeof url === "string" && url.startsWith("/")
      ? `${BASE_API_URL}${url}`
      : url;

  const { skipResponseBody, includeResponse, ...fetchOptions } = options || {};
  const response = await fetch(targetUrl, fetchOptions);
  const extra = includeResponse ? { response } : {};

  if (response.status === 404) {
    return { isError: false, data: undefined, ...extra };
  }
  if (!response.ok) {
    return { isError: true, data: undefined, ...extra };
  }
  if (skipResponseBody) {
    return { isError: false, data: undefined, ...extra };
  }

  const data = await response.json();

  return { isError: false, data, ...extra };
}
